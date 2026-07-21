'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-16 text-center">
        <CheckCircle2 className="size-12 text-teal" />
        <h3 className="mt-4 font-serif text-xl font-bold text-primary">문의가 접수되었습니다</h3>
        <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
          담당자가 확인 후 입력하신 이메일로 회신드리겠습니다. 감사합니다.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-teal hover:underline"
        >
          새 문의 작성하기
        </button>
      </div>
    )
  }

  const fieldClass =
    'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-teal focus:ring-2 focus:ring-teal/30'

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            이름 <span className="text-destructive">*</span>
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="홍길동" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            이메일 <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground">
          문의 유형
        </label>
        <select id="subject" name="subject" className={fieldClass} defaultValue="admission">
          <option value="admission">지원·모집 문의</option>
          <option value="program">교육과정 문의</option>
          <option value="research">연구·협력 문의</option>
          <option value="etc">기타 문의</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          문의 내용 <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${fieldClass} resize-y`}
          placeholder="문의하실 내용을 자세히 작성해 주세요."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
      >
        문의 보내기
      </button>
    </form>
  )
}
