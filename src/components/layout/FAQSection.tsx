import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Interface for FAQ Item
 */
interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

/**
 * Mock data based on the provided image
 */
const FAQ_DATA: FAQItem[] = [
    {
        id: "item-1",
        question: "Do I need a referral or any paperwork before I book (especially for a specialist)?",
        answer: "Requirement for referrals depends on your insurance provider and the specific specialist. Generally, PPO plans do not require referrals, while HMO plans do. Please check with your provider or our support team for specific guidance."
    },
    {
        id: "item-2",
        question: "Can I request a specific doctor or specialist — or just take the next available provider?",
        answer: "You can absolutely request a specific doctor. Our platform allows you to browse profiles, read reviews, and select the exact professional you'd like to consult with."
    },
    {
        id: "item-3",
        question: "What information do you need from me now (e.g. symptoms, medical history, current medications, insurance)?",
        answer: "Initially, we only need your basic contact information and primary concern. Detailed medical history and insurance documents can be uploaded securely after the initial booking."
    },
    {
        id: "item-4",
        question: "How long is a typical appointment, and do I need extra time if I have multiple concerns?",
        answer: "A standard consultation is 20-30 minutes. If you have complex or multiple concerns, we recommend booking a 'Double Session' to ensure the doctor has sufficient time to address everything."
    },
    {
        id: "item-5",
        question: "What is your cancellation or rescheduling policy — and is there a fee if I'm late or miss the appointment?",
        answer: "Cancellations made 24 hours in advance are free. Late cancellations or 'no-shows' may incur a small administrative fee depending on the clinic's policy."
    },
    {
        id: "item-6",
        question: "What forms of payment or insurance do you accept, and will I need to pay a deposit or co-pay upfront?",
        answer: "We accept all major credit cards, Apple Pay, and Google Pay. Insurance co-pays are typically handled at the time of the visit, but some specialists may require a small deposit to secure the slot."
    },
    {
        id: "item-7",
        question: "Are there accommodations for special needs — e.g. wheelchair access, translation/interpretation services, or support for someone accompanying me?",
        answer: "Yes, all our partner facilities are ADA compliant. We also offer digital translation services for over 15 languages. Please mention your requirements in the 'Notes' section during booking."
    }
];

/**
 * FAQSection Component
 * Replicates the visual structure of the third reference image.
 */
const FAQSection: React.FC = () => {
    return (
        <section className="w-full bg-white py-20 px-4">
            <div className="max-w-[1248px] mx-auto">
                {/* Section Heading */}
                <h2 className="text-[#07595F] font-poppins font-bold text-3xl md:text-[40px] text-center mb-12">
                    FAQ Questions
                </h2>

                {/* Accordion Container */}
                <div className="space-y-4">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {FAQ_DATA.map((faq) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="border border-gray-200 rounded-[8px] px-6 transition-all hover:border-[#097178]/30"
                            >
                                <AccordionTrigger className="text-[#07595F] font-medium text-left text-sm md:text-base py-5 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;