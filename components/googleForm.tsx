export default function Googleform() {
    return (
      <form className="flex flex-col gap-4 p-6 md:p-8 rounded-xl w-full max-w-md shadow-xl bg-white">
        <div className="text-center">
          <h1 className="text-[28px] md:text-[36px] font-semibold">Welcome Back</h1>
          <span className="text-[16px] md:text-[18px] mt-2 text-neutral-500 block">
          We&rsquo;re so excited to see you again!
          </span>
        </div>
  
        <div>
          <span className="text-[#686A8A]">Email</span>
          <input
            type="text"
            className="border-2 p-3 border-[#686A8A] rounded-xl w-full mt-1"
            placeholder="john.lennon@email.com"
          />
        </div>
  
        <div>
          <span className="text-[#686A8A]">Password</span>
          <input
            type="password"
            className="border-2 p-3 border-[#686A8A] rounded-xl w-full mt-1"
            placeholder="********"
          />
        </div>
  
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <label className="flex items-center mb-2 md:mb-0">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#Link" className="text-blue-600 underline">
            Forgot Password
          </a>
        </div>
  
        <button className="bg-[#823DA8] text-white rounded-3xl h-12 w-full font-medium hover:bg-[#702f96] transition">
          Log in
        </button>
  
        <div className="text-center text-sm">
          <span>Don&rsquo;t have an account?</span>
         
          <a href="#" className="text-neutral-800 underline font-medium ml-1">
            Sign up
          </a>
        </div>
      </form>
    );
  }
  