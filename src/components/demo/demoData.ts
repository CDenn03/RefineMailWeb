export const STYLES = [
  "Formal",
  "Friendly",
  "Concise",
  "Persuasive",
  "Apologetic",
  "Casual",
  "Neutral/Professional",
] as const;

export type Style = (typeof STYLES)[number];

export interface Demo {
  subject: string;
  input: string;
  outputs: Record<Style, string>;
}

export const DEMOS: Demo[] = [
  {
    subject: "Project Update",
    input:
      "Hey, I need the report by tomorrow. Can you send it? Also the client is asking for updates.",
    outputs: {
      Formal:
        "Dear Sarah,\n\nKindly provide the report by tomorrow. The client has requested an update, and your prompt response would be appreciated.\n\nBest regards,",
      Friendly:
        "Hi Sarah! Hope you're doing well. Could you please send the report by tomorrow? The client has been asking for updates, so it would really help. Thanks so much!",
      Concise:
        "Please send the report by tomorrow. The client has requested an update.",
      Persuasive:
        "Hi Sarah, could you please send the report by tomorrow? The client is actively requesting updates, and your help will keep things moving smoothly. Thanks!",
      Apologetic:
        "Hi Sarah, sorry to rush this, but could you please send the report by tomorrow? The client has been asking for updates. I appreciate your help.",
      Casual:
        "Hey! Can you send the report by tomorrow? The client is asking for updates.",
      "Neutral/Professional":
        "Hi Sarah,\n\nPlease share the report by tomorrow. The client has requested an update.\n\nThank you.",
    },
  },
  {
    subject: "Meeting Follow-up",
    input:
      "Just checking if you saw my last email about the meeting. Let me know what works.",
    outputs: {
      Formal:
        "Dear Sir/Madam,\n\nI am following up on my previous email regarding the meeting. Kindly confirm your availability.\n\nBest regards,",
      Friendly:
        "Hi! Just checking if you had a chance to see my last email about the meeting. Let me know what works for you!",
      Concise:
        "Following up on my last email about the meeting. Please confirm your availability.",
      Persuasive:
        "Hi, I wanted to follow up on the meeting. Confirming your availability will help us move forward smoothly.",
      Apologetic:
        "Hi, sorry to follow up again, but I wanted to check if you saw my last email about the meeting. Please let me know what works.",
      Casual:
        "Hey, just checking if you saw my last email about the meeting. Let me know what works.",
      "Neutral/Professional":
        "Hello,\n\nI am following up on my previous email regarding the meeting. Kindly confirm your availability.\n\nThank you.",
    },
  },
];
