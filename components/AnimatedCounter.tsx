"use client";
import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <CountUp decimal="." prefix="$" decimals={2} duration={2} end={amount} />
  );
}
