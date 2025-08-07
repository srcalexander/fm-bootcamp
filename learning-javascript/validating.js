function isValid(code) {
   code = code.trim();
   let len = code.length;

   if (len >= 8) {
      console.log("Your code has been applied");
      return true;
   }
   console.log("Your code is invalid");
   return false;
}

isValid("abcdefg");
