# Practice-JOIN
ERP 프로젝트에 반영할 SQL-JOIN문 연습을 위한 Repository

# JOIN문 종류와 동작

## 기초 데이터

```sql
-- 테이블 A
+----+------+-------+
| id | name | score |
+----+------+-------+
|  1 | Kim  |    90 |
|  2 | Lee  |    80 |
|  3 | Park |    70 |
+----+------+-------+

-- 테이블 B
+----+------+-------+
| id | name | grade |
+----+------+-------+
|  1 | Kim  |     A |
|  2 | Lee  |     B |
|  4 | Choi |     C |
+----+------+-------+

```

## INNER JOIN

두 테이블에서 공통된 값을 가진 레코드만 보여줌. **교집합**과 같은 개념

### 예제 코드:

두 테이블에서 id와 name이 일치하는 레코드만 보여주는 쿼리문

```sql
SELECT A.id, A.name, A.score, B.grade
FROM A
**INNER JOIN** B
ON **A.id = B.id** AND **A.name = B.name**;
```

### 결과:

```sql
+----+------+-------+-------+
| id | name | score | grade |
+----+------+-------+-------+
|  1 | Kim  |    90 |     A |
|  2 | Lee  |    80 |     B |
+----+------+-------+-------+
```

## LEFT JOIN

왼쪽 테이블의 모든 레코드를 보여주고, 오른쪽 테이블에서 조건에 맞는 레코드를 붙여줌. 조건에 맞지 않으면 NULL 값을 붙여줌

### 예제 코드:

테이블 A의 모든 레코드를 보여주고, 테이블 B에서 조건에 맞는 레코드를 붙여주는 쿼리문

조건에 맞지 않으면 NULL

```sql
SELECT A.id, A.name, A.score, B.grade
FROM A
**LEFT JOIN** B
ON **A.id = B.id** AND **A.name = B.name**;
```

### 결과:

```sql
+----+------+-------+-------+
| id | name | score | grade |
+----+------+-------+-------+
|  1 | Kim  |    90 |     A |
|  2 | Lee  |    80 |     B |
|  3 | Park |    70 |  NULL |
+----+------+-------+-------+
```

