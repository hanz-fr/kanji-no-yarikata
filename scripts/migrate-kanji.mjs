import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(
  readFileSync('./scripts/serviceAccountKey.json', 'utf8')
);

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function migrateKanjiData() {
  try {
    const kanjiRef = db.collection("Kanji");
    const snapshot = await kanjiRef.get();

    console.log(`Found ${snapshot.size} documents to migrate`);

    const batch = db.batch();
    let batchCount = 0;
    let totalUpdated = 0;

    for (const doc of snapshot.docs) {
      const data = doc.data();
      const updates = {};

      // Transform kunyomi - including empty strings
      if (data.kunyomiRomaji !== undefined && typeof data.kunyomiRomaji === "string") {
        if (data.kunyomiRomaji.trim() === "") {
          // Empty string becomes empty array
          updates.kunyomiRomaji = [];
        } else {
          // Split by spaces and filter out empty strings
          updates.kunyomiRomaji = data.kunyomiRomaji
            .split(/\s+/)
            .filter((reading) => reading.trim() !== "");
        }
      }

      // Transform onyomi - including empty strings
      if (data.onyomiRomaji !== undefined && typeof data.onyomiRomaji === "string") {
        if (data.onyomiRomaji.trim() === "") {
          // Empty string becomes empty array
          updates.onyomiRomaji = [];
        } else {
          // Split by spaces and filter out empty strings
          updates.onyomiRomaji = data.onyomiRomaji
            .split(/\s+/)
            .filter((reading) => reading.trim() !== "");
        }
      }

      // Only update if there are changes
      if (Object.keys(updates).length > 0) {
        batch.update(doc.ref, updates);
        batchCount++;
        totalUpdated++;

        console.log(`Queued update for ${doc.id}:`, updates);

        // Firestore batch limit is 500 operations
        if (batchCount === 500) {
          await batch.commit();
          console.log(`Committed batch of ${batchCount} updates`);
          batchCount = 0;
        }
      }
    }

    // Commit remaining updates
    if (batchCount > 0) {
      await batch.commit();
      console.log(`Committed final batch of ${batchCount} updates`);
    }

    console.log(`\nMigration complete! Updated ${totalUpdated} documents.`);
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await admin.app().delete();
  }
}

// Run the migration
migrateKanjiData();