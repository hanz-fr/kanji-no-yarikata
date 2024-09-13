import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const KanjiReferenceHover = (props: {
  text: string;
  kanjiReferences: object[];
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="font-bold">
          {props.text}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit bg-white">
        <div className="flex justify-between space-x-4 dark:text-black">
          {props.kanjiReferences.map((e: any) => (
            <>{e.kanji}<br/></>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default KanjiReferenceHover;
