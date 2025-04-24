import { steps } from "@/constant/constant"; // const steps = [
import Image from "next/image";

export default function StepsCard() {
  return (
    <section className="text-shadow-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5 gap-3">
        {steps.map((step, index) => (
          <div key={index}>
          <div className="flex items-center relative top-3 -z-1">
            <p className="text-emerald-300 text-5xl font-extrabold">{step.number}</p>
            {index < steps.length - 1 && (
                <div className="h-px bg-white flex-grow ms-1" />
              )}
              {index < steps.length - 1 && (
                <div className="w-2 h-2 rounded-full bg-white" />
              )}
          </div>
            <div
              className="rounded-xl flex p-3 shadow-lg transition-transform duration-300 hover:scale-105 text-white bg-emerald-600/30 border border-emerald-500/70 hover:bg-emerald-600/50"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-green-100">{step.description}</p>
              </div>
              <Image
                src={step.icon}
                width={100}
                height={100}
                alt={step.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
