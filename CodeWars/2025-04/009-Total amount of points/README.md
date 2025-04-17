# [8kyu] Total amount of points

[작성 의사 코드 기록] [Notion Link](https://mammoth-syrup-d21.notion.site/8kyu-Total-amount-of-points-1d88b15bc85b8014b33fefe9d7adff00?pvs=4)
<br/>
[문제 바로가기] [CodeWars Link](https://www.codewars.com/kata/5bb904724c47249b10000131)


### [💡문제 ] - ✅ Success

Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:
```
our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
```

