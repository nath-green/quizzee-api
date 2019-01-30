# Quizzee API

📖 A simple RESTful API for the general knowledge quiz questions.

📑 The current version of the API lives at `https://path.to.api/api/v1`

⚡ API last updated on: `DD/MM/YYYY`

---

### _questions_ resource

📥 `https://path.to.api/api/v1/questions`

| #                                            | Method  | Endpoint             | Description                             | Param               |
| -------------------------------------------- | ------- | -------------------- | --------------------------------------- | ------------------- |
| [1](#1---get-retrieve-a-list-of-all-players) | `[GET]` | /question            | Retrieve random question(s)             | `number` (optional) |
| [2](#2---get-retrieve-one-player)            | `[GET]` | /question/{category} | Retrieve random question(s) by category | `number` (optional) |

If `number` param is excluded, **one** random question will be returned. The endpoints only take this parameter and should be passed an integer.

---

#### ⭐ `Question` object:

| Key           | Type   |
| ------------- | ------ |
| \_id          | String |
| question      | String |
| answers       | Object |
| answers[a]    | String |
| answers[b]    | String |
| answers[c]    | String |
| answers[d]    | String |
| correctAnswer | String |
| category      | String |

---

#### Endpoint responses:

| Key     | Type                                               | on Success | on Fail |
| ------- | -------------------------------------------------- | ---------- | ------- |
| data    | Array (of [`Question`](#-question-object) objects) | Y          | N       |
| message | String                                             | N          | Y       |

---

#### Categories:

| Category          | Name      |
| ----------------- | --------- |
| General knowledge | `general` |
| Music             | `music`   |
| Sport             | `sport`   |

---

#### 1 - `[GET]` Retrieve random question(s)

📥 `https://path.to.api/api/v1/questions{?number=X}`

> Return a number of random questions from all categories

##### ✅ Example success response:

> status: `200`

```json
{
  "data": [
    {
      "_id": "5c5070e6e7179a1e4684b061",
      "question": "What is Rihanna's real first name?",
      "answers": {
        "a": "Rihanna",
        "b": "Robyn",
        "c": "Aliah",
        "d": "Susan"
      },
      "correctAnswer": "b",
      "category": "music"
    }
  ]
}
```

##### 🔴 Example error response:

> status: `400`

```json
{
  "message": "Cannot return question(s)"
}
```

---

#### 2 - `[GET]` Retrieve random question(s) by category

📥 `https://path.to.api/api/v1/questions/{category}{?number=X}`

> Return a number of random questions from a [specific category](#categories-)

##### ✅ Example success response:

> status: `200`

```json
{
  "data": [
    {
      "_id": "5c518452e7179a1e468573e1",
      "question": "How many players are actively playing in a basketbal team?",
      "answers": {
        "a": "4",
        "b": "6",
        "c": "5",
        "d": "7"
      },
      "correctAnswer": "c",
      "category": "sport"
    },
    {
      "_id": "5c51848fe7179a1e46857405",
      "question": "What year did the new Wembley stadium open?",
      "answers": {
        "a": "2007",
        "b": "2008",
        "c": "2004",
        "d": "2005"
      },
      "correctAnswer": "a",
      "category": "sport"
    }
  ]
}
```

##### 🔴 Example error response:

> status: `400`

```json
{
  "message": "Cannot return question(s)"
}
```
