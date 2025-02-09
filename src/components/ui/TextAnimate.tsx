import {
  TextAnimate,
  AnimationType,
  AnimationVariant,
} from "@/components/text-animate";
export function TextAnimateDemo({
  text,
  className,
  by = "character",
  delay,
  animation = "blurInUp",
}: {
  text: string;
  className?: string;
  by: AnimationType;
  delay?: number;
  animation?: AnimationVariant;
}) {
  return (
    <TextAnimate
      animation={animation}
      className={className}
      by={by}
      delay={delay}
    >
      {text}
    </TextAnimate>
  );
}
