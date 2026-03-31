'use client'

import { useState } from 'react'

type StyleKey =
  | 'formal'
  | 'friendly'
  | 'concise'
  | 'persuasive'
  | 'apologetic'
  | 'casual'
  | 'neutral'

const demoStyles: Record<StyleKey, { subject: string; body: string }> = {
  formal: {
    subject: 'Request for Report by End of Business Tomorrow',
    body: `Dear <mark class="bg-[#eef3f8] text-[#124170] px-1 py-0.5 rounded-md font-semibold not-italic">[Name]</mark>,

I hope you are well.

I am writing to request the report by <mark class="bg-[#eef3f8] text-[#124170] px-1 py-0.5 rounded-md font-semibold not-italic">end of business tomorrow</mark>. The client has been requesting updates, and having the report will allow us to respond accurately.

Thank you for your assistance.

Kind regards,`,
  },

  friendly: {
    subject: 'Quick request for the report',
    body: `Hi <mark class="bg-[#eef3f8] text-[#124170] px-1 py-0.5 rounded-md font-semibold not-italic">there</mark>,

Hope you are doing well.

Could you send over the report by tomorrow? The client has been asking for updates, and this will help us respond quickly.

Thanks so much,`,
  },

  concise: {
    subject: 'Report needed by tomorrow',
    body: `Please send the report by <mark class="bg-[#eef3f8] text-[#124170] px-1 py-0.5 rounded-md font-semibold not-italic">tomorrow EOD</mark>.

The client is requesting updates and this is needed to respond.`,
  },

  persuasive: {
    subject: 'Report needed to respond to client',
    body: `I am requesting the report by tomorrow. This will allow us to respond to the client's inquiries with clarity and keep communication on track.

Your support on this is important, and I appreciate your help in making this happen.`,
  },

  apologetic: {
    subject: 'Apologies for short notice – report request',
    body: `I apologize for the short notice.

Could you please send the report by tomorrow? The client has been requesting updates, and this will help us respond on time.

Thank you for your understanding.`,
  },

  casual: {
    subject: 'Need the report by tomorrow',
    body: `Hey,

Could you send the report by tomorrow? The client has been asking for updates, so this will help us reply.

Thanks,`,
  },

  neutral: {
    subject: 'Request for report by tomorrow',
    body: `Hello,

I am writing to request the report by <mark class="bg-[#eef3f8] text-[#124170] px-1 py-0.5 rounded-md font-semibold not-italic">tomorrow</mark>.

The client has been inquiring about updates, and having the report will allow us to respond appropriately.

Please let me know if you have any questions.`,
  },
}

const styles: StyleKey[] = [
  'formal',
  'friendly',
  'concise',
  'persuasive',
  'apologetic',
  'casual',
  'neutral',
]

export default function StyleDemo() {
  const [activeStyle, setActiveStyle] = useState<StyleKey>('formal')

  const current = demoStyles[activeStyle]

  return (
    <section className="px-[5%] py-28 bg-white" id="demo">
      <div className="max-w-[1320px] mx-auto">
        <div className="section-label">Live Demo</div>

        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-[#0f172a] leading-[1.15] tracking-[-0.025em] mb-3 max-w-[460px]">
          Watch one email become seven
        </h2>

        <p className="text-[1rem] text-[#475569] leading-[1.7] max-w-[500px] mb-12">
          The same message rewritten across different tones. Select a style to compare outputs.
        </p>

        <div className="card overflow-hidden">
          {/* Original */}
          <div className="px-7 py-5 bg-[#f5f6f8] border-b border-[#dde3ea]">
            <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#124170] mb-2">
              Original Draft
            </div>

            <div className="text-[0.9rem] text-[#334155] bg-white border border-[#dde3ea] rounded-[12px] px-4 py-3 font-mono leading-relaxed">
              “Hey, I need the report by tomorrow. Can you send it? Also the client is asking for updates.”
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#dde3ea] overflow-x-auto bg-white px-2">
            {styles.map((s) => (
              <button
                key={s}
                onClick={() => setActiveStyle(s)}
                className={`px-4 py-3.5 text-[0.8rem] font-semibold whitespace-nowrap transition ${activeStyle === s
                    ? 'text-[#124170] border-b-2 border-[#124170]'
                    : 'text-[#94a3b8] border-b-2 border-transparent hover:text-[#475569]'
                  }`}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>

          {/* Output */}
          <div className="px-7 py-7 bg-white">
            {/* Subject */}
            <div className="mb-4">
              <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#94a3b8] mb-1">
                Subject
              </div>
              <div className="text-[0.95rem] font-semibold text-[#0f172a]">
                {current.subject}
              </div>
            </div>

            {/* Body */}
            <div
              className="text-[0.925rem] leading-[1.8] text-[#334155] whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: current.body }}
            />

            <div className="mt-6 pt-5 border-t border-[#f1f5f9] flex items-center justify-between">
              <span className="text-[0.75rem] text-[#94a3b8]">
                Style:{' '}
                <span className="text-[#124170] font-semibold capitalize">
                  {activeStyle}
                </span>
              </span>

              <button className="bg-[#0f2a44] text-white text-[0.8rem] font-semibold px-4 py-2 rounded-full shadow hover:bg-[#124170] transition">
                Apply to Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}