In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques. It is a type of 
substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions 
down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The 
method is named after Julius Caesar, who used it in his private correspondence. <br>

Your task is to write a function that takes exactly 2 arguments (text, steps) and encrypts/decrypts the given string.
</br>

**For example:**
```js
caesar("Abcd", 2) // "Cdef"
caesar("ZZ Top", 3) // "CC Wrs"
```
