---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptas, exercitationem minima eligendi nostrum tempore eos porro quo delectus modi, itaque vel maxime, dicta quidem! Quod hic a fugit. Corrupti.

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