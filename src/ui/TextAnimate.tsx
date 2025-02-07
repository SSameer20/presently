import { TextAnimate, AnimationType } from "@/components/text-animate";
export function TextAnimateDemo({
  text,
  className,
  by = "character",
  delay,
}: {
  text: string;
  className?: string;
  by: AnimationType;
  delay?: number;
}) {
  return (
    <TextAnimate
      animation="blurInUp"
      className={className}
      by={by}
      delay={delay}
    >
      {text}
    </TextAnimate>
  );
}
