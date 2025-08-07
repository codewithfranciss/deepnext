"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QuizRunner } from "@/components/quiz/QuizRunner"
import { Play, Clock, Users, Brain } from "lucide-react"
import Header from "@/components/shared/Header"
const quizzes = [
  {
    id: 1,
    title: "React Hooks Fundamentals",
    description: "Test your knowledge of React hooks including useState, useEffect, and custom hooks.",
    difficulty: "Beginner",
    questions: 15,
    duration: "10 min",
    participants: 2840,
    rating: 4.8,
    category: "Hooks",
    isNew: true,
    quizData: {
      questions: [
        {
          id: 1,
          question: "What is the correct way to declare a state variable using useState?",
          options: [
            "const [count, setCount] = useState(0);",
            "const count = useState(0);",
            "const [count] = useState(0);",
            "useState(count, 0);",
          ],
          correctAnswer: 0,
          explanation: "useState returns an array with two elements: the current state value and a setter function.",
        },
        {
          id: 2,
          question: "When does useEffect run by default?",
          options: [
            "Only on component mount",
            "After every render",
            "Only when dependencies change",
            "Before every render",
          ],
          correctAnswer: 1,
          explanation: "By default, useEffect runs after every render (both mount and updates).",
        },
        {
          id: 3,
          question: "How do you prevent useEffect from running on every render?",
          options: [
            "Use useCallback instead",
            "Pass an empty dependency array []",
            "Use useMemo instead",
            "Call it conditionally",
          ],
          correctAnswer: 1,
          explanation: "Passing an empty dependency array [] makes useEffect run only once after the initial render.",
        },
        {
          id: 4,
          question: "What does the cleanup function in useEffect do?",
          options: [
            "Prevents memory leaks",
            "Optimizes performance",
            "Cleans up subscriptions and timers",
            "All of the above",
          ],
          correctAnswer: 3,
          explanation:
            "The cleanup function prevents memory leaks, optimizes performance, and cleans up subscriptions, timers, and other side effects.",
        },
        {
          id: 5,
          question:
            "Which hook would you use to store a value that persists across renders but doesn't trigger re-renders?",
          options: ["useState", "useRef", "useMemo", "useCallback"],
          correctAnswer: 1,
          explanation:
            "useRef returns a mutable ref object that persists across renders and doesn't cause re-renders when changed.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Challenge yourself with compound components, render props, and higher-order components.",
    difficulty: "Advanced",
    questions: 20,
    duration: "15 min",
    participants: 1560,
    rating: 4.9,
    category: "Patterns",
    isNew: false,
    quizData: {
      questions: [
        {
          id: 1,
          question: "What is the main benefit of the Compound Component pattern?",
          options: [
            "Better performance",
            "Flexible and reusable component APIs",
            "Smaller bundle size",
            "Easier testing",
          ],
          correctAnswer: 1,
          explanation:
            "Compound components provide flexible and reusable APIs by allowing components to work together while maintaining separation of concerns.",
        },
        {
          id: 2,
          question: "In the render props pattern, what is typically passed as a prop?",
          options: ["A string", "A function that returns JSX", "An object", "An array"],
          correctAnswer: 1,
          explanation:
            "Render props pattern involves passing a function as a prop that returns JSX, allowing dynamic rendering based on component state.",
        },
        {
          id: 3,
          question: "What is a Higher-Order Component (HOC)?",
          options: [
            "A component that renders other components",
            "A function that takes a component and returns a new component",
            "A component with higher priority",
            "A component that uses hooks",
          ],
          correctAnswer: 1,
          explanation:
            "A HOC is a function that takes a component as an argument and returns a new component with additional functionality.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "React Performance Optimization",
    description: "Learn about memoization, lazy loading, and other performance optimization techniques.",
    difficulty: "Intermediate",
    questions: 18,
    duration: "12 min",
    participants: 1920,
    rating: 4.7,
    category: "Performance",
    isNew: true,
    quizData: {
      questions: [
        {
          id: 1,
          question: "What does React.memo do?",
          options: [
            "Memoizes function results",
            "Prevents unnecessary re-renders of functional components",
            "Caches API responses",
            "Optimizes bundle size",
          ],
          correctAnswer: 1,
          explanation:
            "React.memo is a higher-order component that prevents unnecessary re-renders by memoizing the component result.",
        },
        {
          id: 2,
          question: "When should you use useCallback?",
          options: [
            "Always for better performance",
            "When passing functions to child components that are wrapped in React.memo",
            "Only in class components",
            "Never, it's deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "useCallback is useful when passing functions to optimized child components to prevent unnecessary re-renders.",
        },
        {
          id: 3,
          question: "What is the purpose of React.lazy?",
          options: ["Lazy loading of components", "Delaying state updates", "Optimizing images", "Caching data"],
          correctAnswer: 0,
          explanation:
            "React.lazy enables code splitting by allowing you to load components dynamically when they're needed.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "React Testing Essentials",
    description: "Master testing React components with Jest and React Testing Library.",
    difficulty: "Intermediate",
    questions: 16,
    duration: "11 min",
    participants: 1340,
    rating: 4.6,
    category: "Testing",
    isNew: false,
    quizData: {
      questions: [
        {
          id: 1,
          question: "What is the main philosophy behind React Testing Library?",
          options: [
            "Test implementation details",
            "Test what the user sees and interacts with",
            "Test only props and state",
            "Test component lifecycle methods",
          ],
          correctAnswer: 1,
          explanation:
            "React Testing Library focuses on testing components the way users interact with them, not implementation details.",
        },
        {
          id: 2,
          question: "Which query should you prefer when testing with React Testing Library?",
          options: ["getByTestId", "getByClassName", "getByRole", "querySelector"],
          correctAnswer: 2,
          explanation:
            "getByRole is preferred as it tests accessibility and how users with assistive technologies interact with your app.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "React State Management",
    description: "Compare different state management solutions including Redux, Zustand, and Context API.",
    difficulty: "Intermediate",
    questions: 22,
    duration: "16 min",
    participants: 2100,
    rating: 4.8,
    category: "State Management",
    isNew: false,
    quizData: {
      questions: [
        {
          id: 1,
          question: "What is the main benefit of using Redux?",
          options: ["Smaller bundle size", "Predictable state management", "Better performance", "Easier to learn"],
          correctAnswer: 1,
          explanation:
            "Redux provides predictable state management through a single source of truth and pure reducer functions.",
        },
        {
          id: 2,
          question: "When should you use Context API vs external state management?",
          options: [
            "Always use Context API",
            "Context for simple state, external libraries for complex state",
            "Never use Context API",
            "Only use external libraries",
          ],
          correctAnswer: 1,
          explanation:
            "Context API is great for simple state sharing, while external libraries like Redux are better for complex state management needs.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "React Basics Quiz",
    description: "Perfect for beginners - covers JSX, components, props, and basic React concepts.",
    difficulty: "Beginner",
    questions: 12,
    duration: "8 min",
    participants: 3200,
    rating: 4.5,
    category: "Basics",
    isNew: false,
    quizData: {
      questions: [
        {
          id: 1,
          question: "What is JSX?",
          options: [
            "A new JavaScript framework",
            "A syntax extension for JavaScript",
            "A CSS preprocessor",
            "A testing library",
          ],
          correctAnswer: 1,
          explanation:
            "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
        },
        {
          id: 2,
          question: "How do you pass data from parent to child component?",
          options: ["Using state", "Using props", "Using context", "Using refs"],
          correctAnswer: 1,
          explanation: "Props are used to pass data from parent components to child components in React.",
        },
        {
          id: 3,
          question: "What is a React component?",
          options: [
            "A JavaScript function or class that returns JSX",
            "A CSS class",
            "A HTML element",
            "A database table",
          ],
          correctAnswer: 0,
          explanation:
            "A React component is a JavaScript function or class that returns JSX to describe what should appear on the screen.",
        },
      ],
    },
  },
]


export default function QuizPage() {
  const [showSubmitForm, setShowSubmitForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeQuiz, setActiveQuiz] = useState<(typeof quizzes)[0] | null>(null)

  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-600"
      case "Intermediate":
        return "bg-yellow-600"
      case "Advanced":
        return "bg-red-600"
      default:
        return "bg-neutral-600"
    }
  }

  const handleStartQuiz = (quiz: (typeof quizzes)[0]) => {
    setActiveQuiz(quiz)
  }

  const handleQuizComplete = () => {
    setActiveQuiz(null)
  }

  // If a quiz is active, show the quiz runner
  if (activeQuiz) {
    return <QuizRunner quiz={activeQuiz} onComplete={handleQuizComplete} onExit={handleQuizComplete} />
  }

  return (
   
    <div className="min-h-screen flex-col flex w-full bg-background">
    <Header title="Quizzes" />
      <main className="flex-1 p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 lg:mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">React Quizzes</h1>
            </div>
            <p className="text-muted-foreground">Challenge yourself and test your React knowledge</p>
          </div>
          
         

          <div className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-2">
            {quizzes.map((quiz, index) => (
              <Card key={index} className="border-border hover:border-primary/20 transition-all hover:shadow-lg hover:shadow-primary/10 hover-scale">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{quiz.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base mb-3">{quiz.description}</CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Brain className="w-4 h-4" />
                          {quiz.questions} questions
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {quiz.participants.toLocaleString()} taken
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Button 
                      onClick={() => handleStartQuiz(quiz)}
                      className="group relative bg-secondary overflow-hidden hover:scale-105 transition-all duration-200"
                    >
                      <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Start Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>

  )
}
