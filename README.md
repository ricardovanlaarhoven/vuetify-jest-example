# vuetify-jest-example

i've created this example because i've some issues with testing.

1. When running jest on windows, the snapshots are always correct. On ubuntu i'm receiving this error:

    ```
    FAIL  tests/unit/CategorySelector.spec.js
      GlobalSearch.vue
        ✓ matches ui (112ms)
        ✓ matches ui when a headcategory (78ms)
        ✕ matches ui when a subcategory is set (115ms)
    
      ● GlobalSearch.vue › matches ui when a subcategory is set
    
        expect(received).toMatchSnapshot()
    
        Snapshot name: `GlobalSearch.vue matches ui when a subcategory is set 1`
    
        - Snapshot
        + Received
    
        @@ -46,11 +46,11 @@
                    </span>
                  </div>
                </div>
              </div>
            </div>
        -   <div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-select v-autocomplete">
        +   <div class="v-input v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-select v-autocomplete">
              <div class="v-input__control">
                <div role="combobox"
                     aria-haspopup="listbox"
                     aria-expanded="false"
                     aria-owns="list-51"
    
          53 |         });
          54 |         await flushPromises();
        > 55 |         expect(wrapper.html()).toMatchSnapshot();
             |                                ^
          56 |     });
          57 | });
          58 |
    
          at Object.it (tests/unit/CategorySelector.spec.js:55:32)
    
     › 1 snapshot failed.
    Snapshot Summary
     › 1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them.
    
    Test Suites: 1 failed, 1 total
    Tests:       1 failed, 2 passed, 3 total
    Snapshots:   1 failed, 2 passed, 3 total
    Time:        3.254s
    Ran all test suites.
    
    Watch Usage: Press w to show more.  
    ```

2. When using shallowmount to prevent the error from 1. to happen i'm getting this error (only when using `jest --collect-coverage`)
    On ubuntu and windows
    ```
    ● GlobalSearch.vue › matches ui when using shallowMount
    
        expect(received).toMatchSnapshot()
    
        Snapshot name: `GlobalSearch.vue matches ui when using shallowMount 1`
    
        - Snapshot
        + Received
    
        @@ -1,10 +1,20 @@
          <div class="category-selector">
            <vautocomplete-stub errorcount="1"
                                errormessages
                                messages
        -                       rules="function (v) { return !!v || 'Zichtbaarheid is een verplicht veld'; }"
        +                       rules="function (v) {
        +         /* istanbul ignore next */
        +         cov_451fx97cy.f[13]++;
        +         cov_451fx97cy.s[42]++;
        +         return (
        +           /* istanbul ignore next */
        +           (cov_451fx97cy.b[10][0]++, !!v) ||
        +           /* istanbul ignore next */
        +           (cov_451fx97cy.b[10][1]++, 'Zichtbaarheid is een verplicht veld')
        +         );
        +       }"
                                successmessages
                                appendicon="$dropdown"
                                backgroundcolor
                                label="Zichtbaarheid"
                                loaderheight="2"
        @@ -49,11 +59,21 @@
            >
            </vautocomplete-stub>
            <vautocomplete-stub errorcount="1"
                                errormessages
                                messages
        -                       rules="function (v) { return !!v || 'Hoofdcategorie is een verplicht veld'; }"
        +                       rules="function (v) {
        +         /* istanbul ignore next */
        +         cov_451fx97cy.f[15]++;
        +         cov_451fx97cy.s[44]++;
        +         return (
        +           /* istanbul ignore next */
        +           (cov_451fx97cy.b[12][0]++, !!v) ||
        +           /* istanbul ignore next */
        +           (cov_451fx97cy.b[12][1]++, 'Hoofdcategorie is een verplicht veld')
        +         );
        +       }"
                                successmessages
                                value="9"
                                appendicon="$dropdown"
                                backgroundcolor
                                label="Hoofdcategorie"
        @@ -98,11 +118,21 @@
            >
            </vautocomplete-stub>
            <vautocomplete-stub errorcount="1"
                                errormessages
                                messages
        -                       rules="function (v) { return !!v || 'Subcategorie is een verplicht veld'; }"
        +                       rules="function (v) {
        +         /* istanbul ignore next */
        +         cov_451fx97cy.f[17]++;
        +         cov_451fx97cy.s[46]++;
        +         return (
        +           /* istanbul ignore next */
        +           (cov_451fx97cy.b[14][0]++, !!v) ||
        +           /* istanbul ignore next */
        +           (cov_451fx97cy.b[14][1]++, 'Subcategorie is een verplicht veld')
        +         );
        +       }"
                                successmessages
                                value="17"
                                appendicon="$dropdown"
                                backgroundcolor
                                label="Subcategorie"
    
          66 |         });
          67 |         await flushPromises();
        > 68 |         expect(wrapper.html()).toMatchSnapshot();
             |                                ^
          69 |     });
          70 | });
          71 |
    
          at Object.it (tests/unit/CategorySelector.spec.js:68:32)
    ```
