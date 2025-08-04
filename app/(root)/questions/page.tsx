import LocalSearch from '@/components/search/LocalSearch'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

const questions = [
{
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
    { _id: "1", name: "React" },
    { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
},
{
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
    { _id: "1", name: "React" },
    { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
},
];

interface SearchParams {
    searchParams: Promise<{[key: string]: string }>;
}

const QuestionsPage = async ({searchParams} : SearchParams ) => {
    const {query = ''} = await searchParams;
    const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

    return (
        <>
            <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
                <h1 className="h1-bold text-dark100_light900">All Questions</h1>
                <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900" asChild>
                    <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
                </Button>
            </section>
            <section className="mt-11">
                <LocalSearch 
                    route={ROUTES.QUESTIONS}
                    imgSrc="/icons/search.svg" 
                    placeholder="Search Questions..." 
                    otherClasses='flex-1' />
            </section>
            <h2>Home Filter</h2>
            <div className="mt-10 flex w-full flex-col gap-6">
                {filteredQuestions.map((question) => (
                    <div key={question._id} className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold">{question.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default QuestionsPage
