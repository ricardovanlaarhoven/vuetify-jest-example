# vuetify-jest-example

i've created this example because i've some issues with snapshot testing.

windows output:
``` 
PASS  tests/unit/CategorySelector.spec.js
     GlobalSearch.vue
       √ matches ui (109ms)
       √ matches ui when a headcategory (146ms)
       √ matches ui when a subcategory is set (108ms)
   
    › 1 snapshot obsolete.
      • GlobalSearch.vue matches ui when using shallowMount 1
   Snapshot Summary
    › 1 snapshot obsolete from 1 test suite. To remove it, re-run jest with `-u`.
      ↳ tests/unit/CategorySelector.spec.js
          • GlobalSearch.vue matches ui when using shallowMount 1
   
   Test Suites: 1 passed, 1 total
   Tests:       3 passed, 3 total
   Snapshots:   1 obsolete, 3 passed, 3 total
   Time:        2.292s
   Ran all test suites.
```
linux output:
```
 FAIL  tests/unit/CategorySelector.spec.js
  GlobalSearch.vue
    ✓ matches ui (131ms)
    ✕ matches ui when a headcategory (197ms)
    ✕ matches ui when a subcategory is set (111ms)

  ● GlobalSearch.vue › matches ui when a headcategory

    expect(received).toMatchSnapshot()

    Snapshot name: `GlobalSearch.vue matches ui when a headcategory 1`

    - Snapshot
    + Received

    @@ -48,21 +48,21 @@
        <div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-select v-autocomplete">
          <div class="v-input__control">
            <div role="combobox"
                 aria-haspopup="listbox"
                 aria-expanded="false"
    -            aria-owns="list-30"
    +            aria-owns="list-34"
                 class="v-input__slot"
            >
              <div class="v-select__slot">
    -           <label for="input-30"
    +           <label for="input-34"
                       class="v-label v-label--active theme--light"
                       style="left: 0px; position: absolute;"
                >
                  Hoofdcategorie
                </label>
    -           <input id="input-30"
    +           <input id="input-34"
                       type="text"
                       autocomplete="off"
                >
                <div class="v-input__append-inner">
                  <div class="v-input__icon v-input__icon--append">
    @@ -94,21 +94,21 @@
        <div class="v-input theme--light v-text-field v-text-field--is-booted v-select v-autocomplete">
          <div class="v-input__control">
            <div role="combobox"
                 aria-haspopup="listbox"
                 aria-expanded="false"
    -            aria-owns="list-36"
    +            aria-owns="list-40"
                 class="v-input__slot"
            >
              <div class="v-select__slot">
    -           <label for="input-36"
    +           <label for="input-40"
                       class="v-label theme--light"
                       style="left: 0px; position: absolute;"
                >
                  Subcategorie
                </label>
    -           <input id="input-36"
    +           <input id="input-40"
                       type="text"
                       autocomplete="off"
                >
                <div class="v-input__append-inner">
                  <div class="v-input__icon v-input__icon--append">

      40 |         });
      41 |         await flushPromises();
    > 42 |         expect(wrapper.html()).toMatchSnapshot();
         |                                ^
      43 |     });
      44 |
      45 |     it('matches ui when a subcategory is set', async () => {

      at Object.it (tests/unit/CategorySelector.spec.js:42:32)

  ● GlobalSearch.vue › matches ui when a subcategory is set

    expect(received).toMatchSnapshot()

    Snapshot name: `GlobalSearch.vue matches ui when a subcategory is set 1`

    - Snapshot
    + Received

    @@ -2,21 +2,21 @@
        <div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-select v-autocomplete">
          <div class="v-input__control">
            <div role="combobox"
                 aria-haspopup="listbox"
                 aria-expanded="false"
    -            aria-owns="list-79"
    +            aria-owns="list-83"
                 class="v-input__slot"
            >
              <div class="v-select__slot">
    -           <label for="input-79"
    +           <label for="input-83"
                       class="v-label v-label--active theme--light"
                       style="left: 0px; position: absolute;"
                >
                  Zichtbaarheid
                </label>
    -           <input id="input-79"
    +           <input id="input-83"
                       type="text"
                       autocomplete="off"
                >
                <div class="v-input__append-inner">
                  <div class="v-input__icon v-input__icon--append">
    @@ -48,21 +48,21 @@
        <div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-select v-autocomplete">
          <div class="v-input__control">
            <div role="combobox"
                 aria-haspopup="listbox"
                 aria-expanded="false"
    -            aria-owns="list-85"
    +            aria-owns="list-93"
                 class="v-input__slot"
            >
              <div class="v-select__slot">
    -           <label for="input-85"
    +           <label for="input-93"
                       class="v-label v-label--active theme--light"
                       style="left: 0px; position: absolute;"
                >
                  Hoofdcategorie
                </label>
    -           <input id="input-85"
    +           <input id="input-93"
                       type="text"
                       autocomplete="off"
                >
                <div class="v-input__append-inner">
                  <div class="v-input__icon v-input__icon--append">
    @@ -94,21 +94,21 @@
        <div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-select v-autocomplete">
          <div class="v-input__control">
            <div role="combobox"
                 aria-haspopup="listbox"
                 aria-expanded="false"
    -            aria-owns="list-91"
    +            aria-owns="list-99"
                 class="v-input__slot"
            >
              <div class="v-select__slot">
    -           <label for="input-91"
    +           <label for="input-99"
                       class="v-label v-label--active theme--light"
                       style="left: 0px; position: absolute;"
                >
                  Subcategorie
                </label>
    -           <input id="input-91"
    +           <input id="input-99"
                       type="text"
                       autocomplete="off"
                >
                <div class="v-input__append-inner">
                  <div class="v-input__icon v-input__icon--append">

      53 |         });
      54 |         await flushPromises();
    > 55 |         expect(wrapper.html()).toMatchSnapshot();
         |                                ^
      56 |     });
      57 |
      58 |     // it('matches ui when using shallowMount', async () => {

      at Object.it (tests/unit/CategorySelector.spec.js:55:32)

 › 2 snapshots failed.
 › 1 snapshot obsolete.
   • GlobalSearch.vue matches ui when using shallowMount 1
Snapshot Summary
 › 2 snapshots failed from 1 test suite. Inspect your code changes or re-run jest with `-u` to update them.
 › 1 snapshot obsolete from 1 test suite. To remove it, re-run jest with `-u`.
   ↳ tests/unit/CategorySelector.spec.js
       • GlobalSearch.vue matches ui when using shallowMount 1

Test Suites: 1 failed, 1 total
Tests:       2 failed, 1 passed, 3 total
Snapshots:   2 failed, 1 obsolete, 1 passed, 3 total
Time:        3.663s
Ran all test suites.
```
