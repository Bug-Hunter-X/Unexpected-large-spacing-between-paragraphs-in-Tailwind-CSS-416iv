```javascript
// Example usage of Tailwind CSS classes that cause unexpected behavior
<div class="flex justify-center items-center">
  <div class="bg-gray-200 p-4 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">This is a test</h2>
    <p class="text-gray-700">This paragraph has an unusually large spacing below it.</p>
    <p class="text-gray-700">This paragraph also has a large spacing below it</p>
  </div>
</div>
```