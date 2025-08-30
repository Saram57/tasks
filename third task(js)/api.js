
async function signIn(email, password) {
  try {
    const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log("Response:", data);

    if (response.ok) {
      alert("Login successful!");
      localStorage.setItem("token", data.token); 
    } else {
      alert(data.message || "Login failed!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
}



