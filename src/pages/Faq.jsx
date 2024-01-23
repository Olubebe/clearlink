import Accordion from "../components/Accordion";

const Faq = () => {
  return (
    <div className="mt-20 mb-20 mx-20">
      <div className="flex w-full pt-30 flex-wrap justify-between font-inter">
        <div className="space-y-5">
          <p className="font-semibold text-blue-700">Support</p>
          <h2 className="text-3xl text-gray-800 font-semibold">FAQs</h2>
          <p className="text-gray-500 font-normal max-w-sm">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <span className="underline-offset-1 underline">
              chat to our friendly team.
            </span>
          </p>
        </div>
        <div className="w-2/4">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
