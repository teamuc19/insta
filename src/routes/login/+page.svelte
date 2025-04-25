<script>
    import { enhance } from "$app/forms";
    import Warning from "$lib/components/Warning.svelte";
        export let form;
    </script>
    
    <div>
    
    
        <form action="?/login" method="POST" use:enhance>
    
            <label for="eamil">E-Mail</label>
            <input type="text" name="email" id="email" required>
    
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required>
    
            <button type="submit">Login</button>
    
            {#if form}
    
            <Warning message={form.message} />
    
            {/if}
    
    
        </form>
    
    
    
    </div>
    
    
    <style>
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f9f9f9;
        }
    
        form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }
    
      
    
        label {
            font-size: 14px;
            color: #555;
        }
    
        input {
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 5px;
            outline: none;
            transition: border-color 0.3s ease;
        }
    
        input:focus {
            border-color: #007BFF;
        }
    
        button {
            padding: 10px;
            font-size: 16px;
            color: #fff;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
    
        button:hover {
            background-color: #0056b3;
        }
    
        
    </style>