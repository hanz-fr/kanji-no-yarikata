import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineDraw } from "react-icons/md";
import DrawKanjiSVG from "./DrawKanjiSVG";

export function DrawKanjiContainer(props: { kanjiSvg: string }) {
  let kanjiSVG;

  const getKanjiSVG = async (unicode: string): Promise<string> => {
    const current_url_host = window.location.origin;

    const res = await fetch(`${current_url_host}/kanjivg/kanji/${unicode}.svg`);
    if (!res.ok) {
      throw new Error("Failed to load SVG");
    }
    return res.text();
  };

  if (props.kanjiSvg != "") {
    kanjiSVG = getKanjiSVG(props.kanjiSvg);
  } else {
    kanjiSVG = undefined
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-3 rounded-full bg-[#D9D9D9] hover:bg-[#c5c5c5] ">
          <MdOutlineDraw className="text-lg" color="black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="dialog-content">
        <DialogHeader>
          <DialogTitle>Drawing</DialogTitle>
          {kanjiSVG != undefined && <DrawKanjiSVG svg={kanjiSVG} />}
          {kanjiSVG == undefined && <p>No drawing for this kanji.</p>}
          <DialogDescription />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
