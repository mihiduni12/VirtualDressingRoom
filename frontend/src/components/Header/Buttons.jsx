import React from "react";
import { Link } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";

export default function Buttons() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div>
      <div className="mt-[36px]">
        {user ? (
          <>
            <button
              onClick={handleSignOut}
              className="font-Cairo font-[12pt] bg-BrownLi2 hover:bg-yellowDr text-Black hover:text-white py-2 px-4 hover:border-blue-500 mr-[46.2px] md-[60px] float-right rounded"
            >
              Sign Out
            </button>

            <button className="font-Cairo font-[12pt] bg-BrownLi2 hover:bg-yellowDr text-Black hover:text-white py-2 px-4 hover:border-blue-500 mr-[8px] md-[60px] float-right rounded">
              <Link to="/profile">Profile</Link>
            </button>
          </>
        ) : (
          <button className="font-Cairo font-[12pt] bg-BrownLi2 hover:bg-yellowDr text-Black hover:text-white py-2 px-4 hover:border-blue-500 mr-[90px] md-[60px] float-right rounded">
            <Link to="/sign-in">Sign In</Link>
          </button>
        )}
        
        {/* Always show the Closet button */}
        <Link to="/closet">
        <button className="font-Cairo font-[12pt] bg-BrownLi2 hover:bg-yellowDr text-Black hover:text-white py-2 px-4 hover:border-blue-500 mr-[90px] md-[60px] float-right rounded">
          Closet
        </button>
        </Link>
      </div>
    </div>
  );
}
