import type { ActionFunctionArgs } from "react-router";

export async function LandingAction({ request }: ActionFunctionArgs) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error("Discord webhook URL not configured");
  }

  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: true, message: "Invalid message data" };
  }

  try {
    const embed = {
      title: "🌐 New Portfolio Contact",
      color: 0x6366f1,
      fields: [
        {
          name: "👤 Name",
          value: name,
          inline: true,
        },
        {
          name: "📧 Email",
          value: email,
          inline: true,
        },
        {
          name: "💬 Message",
          value: message || "No message provided",
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Portfolio Contact Form",
      },
    };

    // Send to Discord webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
        username: "Portfolio Bot",
        avatar_url: "https://cdn.discordapp.com/emojis/🌐.png",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      success: true,
      message: "Message submitted successfully",
    };
  } catch (error) {
    console.error("Error submitting message:", error);
    return {
      error: true,
      message: "Failed to submit message.",
    };
  }
}
