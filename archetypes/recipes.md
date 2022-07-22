---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}

ingredients:
  - name: Ingredient 1
    amount: 600
    unit: grams

  - name: Ingredient 2
    amount: 600
    unit: grams

servings: 0
servingSize: 0
servingSizeUnits: grams

proteinPerServing: 0
fatsPerServing: 0
carbsPerServing: 0
caloriesPerServing: 0

prepTime: 0 minutes
totalTime: 0 minutes

featuredImage: ""

tags:
  - Meal Prep

---

Recipe for {{ .Name }}