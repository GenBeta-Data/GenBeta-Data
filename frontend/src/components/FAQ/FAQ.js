import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What is this gaming platform?",
            answer: "This platform allows users to play games, read blogs, and interact with other gamers."
        },
        {
            question: "How do I create an account?",
            answer: "You can create an account by clicking on the 'Register' button on the homepage."
        },
        {
            question: "What types of games are available?",
            answer: "We offer a variety of games, including action, strategy, and puzzle games."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact support through the 'Contact Us' section in the footer."
        },
        {
            question: "Is there a mobile version of the platform?",
            answer: "Yes, our platform is mobile-friendly and can be accessed from any device."
        }
    ];

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;