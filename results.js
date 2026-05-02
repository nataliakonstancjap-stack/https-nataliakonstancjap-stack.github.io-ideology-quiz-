// results.js

// Array of ideologies that will be matched against scores
const ideologies = [
    { name: 'Ideology A', scores: { leftRight: 2, authoritarianLibertarian: 3 }, shareableURL: 'https://example.com/ideologyA' },
    { name: 'Ideology B', scores: { leftRight: -1, authoritarianLibertarian: 1 }, shareableURL: 'https://example.com/ideologyB' },
    // Add more ideologies as needed
];

// Function to calculate axis scores from quiz answers
function calculateScores(answers) {
    let leftRightScore = 0;
    let authoritarianLibertarianScore = 0;

    // Example of processing quiz answers
    for (const answer of answers) {
        leftRightScore += answer.leftRight;
        authoritarianLibertarianScore += answer.authoritarianLibertarian;
    }

    return { leftRightScore, authoritarianLibertarianScore };
}

// Function to find the closest ideology based on scores
function findClosestIdeology(scores) {
    let closest = null;
    let closestDistance = Infinity;

    for (const ideology of ideologies) {
        const distance = Math.sqrt(
            Math.pow(scores.leftRightScore - ideology.scores.leftRight, 2) +
            Math.pow(scores.authoritarianLibertarianScore - ideology.scores.authoritarianLibertarian, 2)
        );

        if (distance < closestDistance) {
            closestDistance = distance;
            closest = ideology;
        }
    }

    return closest;
}

// Function to generate a shareable URL for the results
function generateShareableURL(ideology) {
    return ideology.shareableURL;
}

// Overall function to be called with quiz answers
function getResults(answers) {
    const scores = calculateScores(answers);
    const closestIdeology = findClosestIdeology(scores);
    const shareableURL = generateShareableURL(closestIdeology);

    return {
        ideology: closestIdeology.name,
        shareableURL,
    };
}
