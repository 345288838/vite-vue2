<template>
  <div class="div1">
    Hello Vite Vue2
    <div class="div2">测试测试</div>
  </div>
</template>

<script>
function foo() {
  const b = [1, 2, 3]
  const a = '123'
  const c = { a: 1 }
  if (a == '123') {
    console.log('123')
  } else {
    console.log('345')
  }
  b.map(e => {
    console.log(e)
    return e + 1
  })
  console.log(c, b)
}
foo()
export default {}
</script>
<style lang="scss" scope>
@import './app';

$color: #ec0000;

.div2 {
  width: 100px;
  height: 100px;
  padding-bottom: 20px;
  padding-left: 20px;
  background: $color;
}
</style>
