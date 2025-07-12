import axios from "axios"


export const moodTracker = async (userPrompt) => {
    // console.log("hello world", import.meta.env.VITE_GEMINI_API_KEY)
    const systemPrompt = `You are an assistant that creates music moods and playlists based on emotional memories.

Given a user’s memory or vibe description, do the following:
1. Identify the emotional tone and mood (e.g., nostalgic, joyful, angry, etc.)
2. Suggest musical genres that match the mood
3. Predict the most likely decade or era for the music style (e.g., 80s, 2000s, etc.)
4. Recommend 3-5 artists that match the vibe
5. Give a creative title for a playlist based on the memory

restriction:
 - try to give the mood according to indian culture and also incule these like rap, rock, sad, romantic, emotional 
 - try to provide indian songs and promote indian creater more like anup jain , arijit singh etc.
 - provide playlist titles in indian flavour. chose any one from this object const desiPlaylists = [
  {
    title: "Garam Yaadein",
    caption: "Thodi purani, thodi jalti — yaadon ki biryani, dum maaro style."
  },
  {
    title: "Bollywood Ke Side Effects",
    caption: "Ek baar sunoge, toh flashback chal padega."
  },
  {
    title: "Chai, Baarish Aur Tum",
    caption: "Sab kuch mila... bas tum nahi mile. ☕🌧️💔"
  },
  {
    title: "Rickshaw Romance",
    caption: "Love story shuru hui 2 rupees ke auto fare se."
  },
  {
    title: "Masala Beats",
    caption: "Bass mein dhol, vocals mein drama. Poora Bollywood buffet."
  },
  {
    title: "Saddi Dilli Vibe",
    caption: "Swag on, heartbreak off. Gaadi bhi sun rahi hai."
  },
  {
    title: "Tandoori Tracks",
    caption: "Jale dilon ke liye, thodi jalti beats bhi chahiye."
  },
  {
    title: "College Canteen Crush",
    caption: "One samosa, two chai, aur ek aankhon ka rishta."
  },
  {
    title: "Patiala Pulse",
    caption: "Heavy bass, heavier feels. No chakhna needed."
  },
  {
    title: "Gully Love Mix",
    caption: "Side character tha main... phir bhi pyaar mein lead bana."
  },
  {
    title: "Lo-fi Lassi",
    caption: "Dil to udaas hai, par background beat tight hai."
  },
  {
    title: "Breakup Biryani",
    caption: "Har layer mein ek yaad chhupi hai… aur ek thoda mirch zyada."
  },
  {
    title: "Train Station Tapes",
    caption: "Ek platform, do log, aur ek gaana jo ab bhi bajta hai."
  },
  {
    title: "Monsoon Mehfil",
    caption: "Baarish thi ya baarish banayi thi? Background mein Mohit Chauhan."
  },
  {
    title: "Nasha-e-Nostalgia",
    caption: "Na daaru ka, na dard ka — yeh high to yaadon ka hai."
  }
];
                                    |

 

Example Input:
"We were dancing on a rooftop in 2018 during a rainstorm. It was warm and chaotic and unforgettable."

Example Output:
Artists: The 1975, Joji, Clairo, Honne  
Mood: Nostalgic, Romantic, Adventurous  
Genres: Indie pop, Dream pop, Lo-fi beats  
Era: 2010s  
Playlist Title: "Stormy Rooftop Hearts"`


const result =  await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAnNfWknC-RFCBISE8BfFs3u-DuZ2W5slI`,
    {
      contents: [
        {
          role: "user",
          parts: [{ text: systemPrompt + userPrompt }]
        }
      ]
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }


)
console.log("hello hello", result.data.candidates[0].content.parts[0].text);



} 

moodTracker("feeling sad bhyiii");




// --------------------------------------------------------------------------------------------------------------


// import { GoogleGenAI } from "@google/genai";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI({ apiKey: 'AIzaSyAnNfWknC-RFCBISE8BfFs3u-DuZ2W5slI' });

// export const moodTracker = async (userPrompt) => {
//   // Get the model instance
//   const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//   const systemPrompt = `You are an assistant that creates music moods and playlists based on emotional memories.

// Given a user's memory or vibe description, do the following:
// 1. Identify the emotional tone and mood (e.g., nostalgic, joyful, angry, etc.)
// 2. Suggest musical genres that match the mood
// 3. Predict the most likely decade or era for the music style (e.g., 80s, 2000s, etc.)
// 4. Recommend 3-5 artists that match the vibe
// 5. Give a creative title for a playlist based on the memory

// restriction:
// - Use Indian culture-based moods (like Bollywood heartbreak, chai nostalgia, etc.)
// - Include genres like sad, romantic, rock, emotional
// - Suggest Indian artists (e.g., Anuv Jain, Arijit Singh, KK, etc.)
// - Generate creative desi titles with spicy captions (tadka style)
// `;

//   try {
//     const result = await model.generateContent({
//     //   systemInstruction: systemPrompt,
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: (userPrompt + systemPrompt) }]
//         }
//       ]
//     });

//     console.log("Gemini output✅", result.response.text());
//     return result.response.text();
    
//   } catch (err) {
//     console.error("❌ Gemini SDK Error:", err);
//   }
// };

// moodTracker("feeling sad yrr");
