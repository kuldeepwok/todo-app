body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  text-align: center;
  width: 300px;
}

input {
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  width: 100%;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #f0f0f0;
  margin: 5px 0;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
}

li.completed {
  text-decoration: line-through;
  background: #d4edda;
}
