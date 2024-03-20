export const LoginForm = () => {
  return (
    <form className="flex flex-col max-w-md min-h-[470px] bg-slate-500">
      <h1>Login</h1>
      <div>
        <input type="email" name="email" placeholder="Email" />
      </div>

      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <div>
        <label htmlFor="remember">
          <input type="checkbox" name="remember" />
          Запомнить меня?
        </label>
      </div>
      <button className="" type="submit" name="form_auth_submit">
        Войти
      </button>
    </form>
  );
};
