# [8kyu] Student's Final Grade

[작성 의사 코드 기록] [Notion Link](https://mammoth-syrup-d21.notion.site/8kyu-Student-s-Final-Grade-1c08b15bc85b8019858ad228a20247b5?pvs=4)
<br/>
[문제 바로가기] [CodeWars Link](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)


### [💡문제 ] - ✅ Success

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases

Examples(Inputs-->Output):
``` js
100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
```
