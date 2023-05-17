import { Section } from "../layout/Section";


const Tools = ({ title, forwardRef, ref }) => (
  <div ref={forwardRef || ref}>
    <Section title={title} yPadding="mb-20">
      <div className="flex justify-center relative">
      <img src="/assets/images/tools.png" alt="Tools" />
       
      </div>
    </Section>
  </div>
);

export { Tools };
