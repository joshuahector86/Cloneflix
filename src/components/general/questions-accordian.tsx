import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const QuestionsAccordian = () => {
  const accordianData = [
    {
      title: "What is Cloneflix?",
      content: "Cloneflix is a platform that allows you to clone any website. It is a web application that is built using Next.js, Tailwind CSS, and TypeScript.",
      id: 1
    },
    {
      title: "How does Cloneflix work?",
      content: "Cloneflix works by cloning the website you want to clone. It then displays the cloned website on the platform.",
      id: 2
    },
    {
      title: "What is the purpose of Cloneflix?",
      content: "The purpose of Cloneflix is to provide a platform for users to clone websites. It is a web application that is built using Next.js, Tailwind CSS, and TypeScript.",
      id: 3
    },
    {
      title: "What is the purpose of Cloneflix?",
      content: "The purpose of Cloneflix is to provide a platform for users to clone websites. It is a web application that is built using Next.js, Tailwind CSS, and TypeScript.",
      id: 4
    },  
  ]
  return (
    <div>
        <Accordion type="single" collapsible className="w-full">
          {accordianData.map((item) => (
            <AccordionItem key={item.id} value={item.title}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
   
  </Accordion>
  </div>
  )
}

export default QuestionsAccordian