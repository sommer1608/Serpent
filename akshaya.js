// Base functionality for Homework Help for Parents

// Simulated knowledge base (to be replaced by real API or AI in the future)
const helpDatabase = {
    "what is a fraction": {
        explanation: "A fraction represents a part of a whole. For example, 1/2 means one of two equal parts.",
        tips: [
            "Use objects like pizza slices to visualize the parts.",
            "Relate it to real-life sharing (e.g., splitting a sandwich)."
        ]
    },
    "photosynthesis": {
        explanation: "Photosynthesis is how plants make their food using sunlight, water, and carbon dioxide.",
        tips: [
            "Use diagrams of leaves and the sun to show the process.",
            "Try simple experiments with plants near light and in the dark."
        ]
    }
};

// Utility function to format output
function formatTips(tipsArray) {
    return tipsArray.map(tip => `<li>${tip}</li>`).join('');
}

// Core logic: Handle user query and generate a response
function getHelp() {
    const questionInput = document.getElementById('question').value.trim().toLowerCase();
    const output = document.getElementById('output');
    const explanationBox = document.getElementById('explanation');
    const tipsBox = document.getElementById('tips');

    if (questionInput === "") {
        alert("Please enter a topic or question.");
        return;
    }

    const result = helpDatabase[questionInput];

    if (result) {
        explanationBox.innerText = result.explanation;
        tipsBox.innerHTML = formatTips(result.tips);
    } else {
        explanationBox.innerText = "Sorry, we don't have a simple explanation for that yet.";
        tipsBox.innerHTML = "<li>Try breaking the topic into smaller parts.</li><li>Search for examples or visuals to help explain.</li>";
    }

    output.style.display = "block";
}
