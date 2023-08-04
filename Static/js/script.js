

var nav = document.querySelector('nav');
window.addEventListener('scroll',function() {
  if(window.pageYOffset > 100) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
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

        
    


