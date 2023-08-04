

const nav = document.querySelector("nav");
document.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        nav.style.backgroundColor = "rgb(86, 85, 84,1)";
        nav.style.width = "100%";
        nav.style.color = "white";
    }else{
        nav.style.backgroundColor = "rgb(254,254,254,0.1)";
    }
})

    function calculateBMI() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const bmiInput = document.getElementById('bmi').value;

        let bmi;
        if (bmiInput) {
            bmi = parseFloat(bmiInput);
        } else {
            // Calculate BMI if not provided
            bmi = weight / (height * height);
        }

        let category, dietRecommendation;

        if (bmi < 18.5) {
            category = "Underweight";
            dietRecommendation = "Focus on nutrient-dense foods to increase calorie intake.";
        } else if (bmi < 25) {
            category = "Normal Weight";
            dietRecommendation = "Maintain a balanced diet with a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats.";
        } else if (bmi < 30) {
            category = "Overweight";
            dietRecommendation = "Aim for a balanced diet with portion control to manage calorie intake. Increase physical activity and focus on regular exercise.";
        } else if (bmi < 35) {
            category = "Obesity (Class I)";
            dietRecommendation = "Adopt a balanced diet with portion control and a focus on nutrient-dense foods. Incorporate regular exercise to aid in weight loss.";
        } else if (bmi < 40) {
            category = "Obesity (Class II)";
            dietRecommendation = "Consult a healthcare professional for personalized diet and exercise plans. Focus on lifestyle changes, including a balanced diet and regular physical activity.";
        } else {
            category = "Obesity (Class III)";
            dietRecommendation = "Consult a healthcare professional for personalized diet and exercise plans. Focus on lifestyle changes, including a balanced diet and regular physical activity.";
        }

           const resultElement = document.getElementById('result');
           resultElement.innerHTML = `Your BMI: ${bmi.toFixed(2)} (${category})<br>Diet Recommendation: ${dietRecommendation}`;
           resultElement
    };

        
    


