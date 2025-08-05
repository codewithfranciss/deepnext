"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { X, Clock, CheckCircle, XCircle, Trophy, RotateCcw, ArrowRight, ArrowLeft } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface Quiz {
  id: number
  title: string
  description: string
  difficulty: string
  questions: number
  duration: string
  category: string
  quizData: {
    questions: Question[]
  }
}

interface QuizRunnerProps {
  quiz: Quiz
  onComplete: () => void
  onExit: () => void
}

export function QuizRunner({ quiz, onComplete, onExit }: QuizRunnerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false)

  const currentQuestion = quiz.quizData.questions[currentQuestionIndex]
  const totalQuestions = quiz.quizData.questions.length
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  // Timer effect
  useEffect(() => {
    if (!quizStarted || showResults) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowResults(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizStarted, showResults])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestionIndex] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    quiz.quizData.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100
    if (percentage >= 80) return "text-green-500"
    if (percentage >= 60) return "text-yellow-500"
    return "text-red-500"
  }

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

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers([])
    setShowResults(false)
    setTimeLeft(600)
    setQuizStarted(false)
  }

  // Quiz intro screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-[#0e0e0e]">
        <header className="sticky top-0 z-40 border-b border-neutral-800 bg-[#0e0e0e]/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <SidebarTrigger className="text-white hover:text-[#7c3aed] flex-shrink-0" />
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                <h1 className="text-lg sm:text-xl font-semibold truncate">Quiz Setup</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <Button variant="ghost" size="icon" onClick={onExit} className="text-white hover:text-[#7c3aed]">
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <Card className="w-full max-w-2xl bg-neutral-900/50 border-neutral-800 rounded-xl mx-4">
            <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Badge className={`text-white text-xs sm:text-sm ${getDifficultyColor(quiz.difficulty)}`}>
                  {quiz.difficulty}
                </Badge>
                <Badge variant="outline" className="border-neutral-700 text-neutral-400 text-xs sm:text-sm">
                  {quiz.category}
                </Badge>
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-white mb-2">{quiz.title}</CardTitle>
              <CardDescription className="text-neutral-300 text-base sm:text-lg px-2">
                {quiz.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xl sm:text-2xl font-bold text-[#7c3aed]">{totalQuestions}</div>
                  <div className="text-xs sm:text-sm text-neutral-400">Questions</div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xl sm:text-2xl font-bold text-[#7c3aed]">{formatTime(timeLeft)}</div>
                  <div className="text-xs sm:text-sm text-neutral-400">Time Limit</div>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 text-sm text-neutral-300">
                <h3 className="font-semibold text-white text-base">Quiz Instructions:</h3>
                <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm leading-relaxed">
                  <li>You have {formatTime(timeLeft)} to complete all questions</li>
                  <li>You can navigate between questions using the Previous/Next buttons</li>
                  <li>Your answers are saved automatically</li>
                  <li>Click "Finish Quiz" when you're ready to submit</li>
                  <li>You'll see detailed explanations after completing the quiz</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button
                  variant="outline"
                  onClick={onExit}
                  className="w-full sm:flex-1 border-neutral-700 text-white hover:bg-neutral-800 bg-transparent"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleStartQuiz}
                  className="w-full sm:flex-1 bg-[#7c3aed] hover:bg-[#7c3aed]/80 text-white"
                >
                  Start Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  // Results screen
  if (showResults) {
    const score = calculateScore()
    const percentage = Math.round((score / totalQuestions) * 100)

    return (
      <div className="min-h-screen bg-[#0e0e0e]">
        <header className="sticky top-0 z-40 border-b border-neutral-800 bg-[#0e0e0e]/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <SidebarTrigger className="text-white hover:text-[#7c3aed] flex-shrink-0" />
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                <h1 className="text-lg sm:text-xl font-semibold truncate">Quiz Results</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <Button variant="ghost" size="icon" onClick={onComplete} className="text-white hover:text-[#7c3aed]">
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6">
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            {/* Score Summary */}
            <Card className="bg-neutral-900/50 border-neutral-800 rounded-xl">
              <CardHeader className="text-center px-4 sm:px-6">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-[#7c3aed]" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-white mb-2">Quiz Completed!</CardTitle>
                <div className={`text-2xl sm:text-4xl font-bold mb-2 ${getScoreColor(score, totalQuestions)}`}>
                  {score}/{totalQuestions}
                </div>
                <div className="text-base sm:text-lg text-neutral-300">{percentage}% Correct</div>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-6">
                <Button
                  onClick={handleRetakeQuiz}
                  variant="outline"
                  className="w-full sm:w-auto border-neutral-700 text-white hover:bg-neutral-800 bg-transparent"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Button onClick={onComplete} className="w-full sm:w-auto bg-[#7c3aed] hover:bg-[#7c3aed]/80 text-white">
                  Back to Quizzes
                </Button>
              </CardContent>
            </Card>

            {/* Detailed Results */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-white px-2 sm:px-0">Detailed Results</h2>
              {quiz.quizData.questions.map((question, index) => {
                const userAnswer = selectedAnswers[index]
                const isCorrect = userAnswer === question.correctAnswer

                return (
                  <Card key={question.id} className="bg-neutral-900/50 border-neutral-800 rounded-xl">
                    <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {isCorrect ? (
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 leading-tight">
                            Question {index + 1}: {question.question}
                          </CardTitle>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => {
                              const isUserAnswer = userAnswer === optionIndex
                              const isCorrectAnswer = optionIndex === question.correctAnswer

                              return (
                                <div
                                  key={optionIndex}
                                  className={`p-2 sm:p-3 rounded-lg border text-sm sm:text-base ${
                                    isCorrectAnswer
                                      ? "border-green-500 bg-green-500/10 text-green-400"
                                      : isUserAnswer && !isCorrect
                                        ? "border-red-500 bg-red-500/10 text-red-400"
                                        : "border-neutral-700 bg-neutral-800/50 text-neutral-300"
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium flex-shrink-0">
                                      {String.fromCharCode(65 + optionIndex)}.
                                    </span>
                                    <span className="flex-1 min-w-0">{option}</span>
                                    {isCorrectAnswer && (
                                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                                    )}
                                    {isUserAnswer && !isCorrect && (
                                      <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                          <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <div className="text-xs sm:text-sm font-medium text-blue-400 mb-1">Explanation:</div>
                            <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                              {question.explanation}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Quiz question screen
  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      <header className="sticky top-0 z-40 border-b border-neutral-800 bg-[#0e0e0e]/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <SidebarTrigger className="text-white hover:text-[#7c3aed] flex-shrink-0" />
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <h1 className="text-lg sm:text-xl font-semibold truncate">{quiz.title}</h1>
              <Badge className={`text-white ${getDifficultyColor(quiz.difficulty)}`}>{quiz.difficulty}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{formatTime(timeLeft)}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={onExit} className="text-white hover:text-[#7c3aed]">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between mb-2 text-xs sm:text-sm">
              <span className="text-neutral-400">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <span className="text-neutral-400">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-1.5 sm:h-2" />
          </div>

          {/* Question */}
          <Card className="bg-neutral-900/50 border-neutral-800 rounded-xl mb-4 sm:mb-6">
            <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
              <CardTitle className="text-lg sm:text-xl font-semibold text-white leading-tight">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="space-y-2 sm:space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-3 sm:p-4 text-left rounded-lg border transition-all duration-200 ${
                      selectedAnswers[currentQuestionIndex] === index
                        ? "border-[#7c3aed] bg-[#7c3aed]/10 text-white"
                        : "border-neutral-700 bg-neutral-800/50 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-800"
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-current flex items-center justify-center text-xs sm:text-sm font-medium mt-0.5 sm:mt-0">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              variant="outline"
              className="w-full sm:w-auto order-2 sm:order-1 border-neutral-700 text-white hover:bg-neutral-800 bg-transparent disabled:opacity-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="text-xs sm:text-sm text-neutral-400 order-1 sm:order-2 text-center">
              {selectedAnswers.filter((answer) => answer !== undefined).length} of {totalQuestions} answered
            </div>

            {currentQuestionIndex === totalQuestions - 1 ? (
              <Button
                onClick={handleNext}
                className="w-full sm:w-auto order-3 bg-[#7c3aed] hover:bg-[#7c3aed]/80 text-white"
              >
                Finish Quiz
                <Trophy className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="w-full sm:w-auto order-3 bg-[#7c3aed] hover:bg-[#7c3aed]/80 text-white"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
