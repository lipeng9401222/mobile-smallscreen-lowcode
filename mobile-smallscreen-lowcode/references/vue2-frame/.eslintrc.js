module.exports = {
    env: {
        browser: true,
        commonjs: false,
        es6: true,
        node: true
    },

    // 使用默认的配置
    'extends': [
        'eslint:recommended'
      ],

    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@babel/eslint-parser',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: false
        },
        sourceType: 'module'
    },

    globals: {
        // 是否允许被重写
        jQuery: false,
        $: false,
        Mustache: false,
        Mock: false,
        mini: false,
        Util: false,
        epoint: false,
        epoint_local: true,
        EpFrameSysParams: true,
        _rootPath: true,
        Bubble: false,
        Swiper: false,
        CountUp: false,
        layer: false,
        ejs: true,
        MiniRefresh: true,
        Config: true,
        dd: true,
        VueECharts: true,
        uni: true,
        vant: true,
        Toast: true,
        Dialog: true,
        ImagePreview: true,
        EmMap: true,
        Notify: true,
        SelectPerson: true,
        wx: true,
        my: true,
        weex: true,
        echarts: true
    },

    plugins: ['vue'],

    // [中文文档: http://eslint.cn/docs/rules/ ](http://eslint.cn/docs/rules/)
    rules: {
        'no-const-assign': 'warn',
        'no-this-before-super': 'warn',
        'constructor-super': 'warn',
        'valid-typeof': 'warn',

        'no-cond-assign': 'error',
        'for-direction': 'error',
        'no-constant-condition': 'error',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'warn',
        'no-empty-character-class': 'error',
        'no-extra-semi': 'warn',
        'no-unreachable': 'warn',
        'default-case': 'error',
        eqeqeq: 'warn',
        'no-fallthrough': 'error',
        'no-redeclare': 'error',

        'no-undef': 'warn',

        'init-declarations': 'off',
        'no-catch-shadow': 'error',
        'no-delete-var': 'warn',
        'no-shadow': 'warn',
        'no-shadow-restricted-names': 'error',
        'no-undefined': 'off',
        'no-unused-vars': 'warn',
        'block-scoped-var': 'warn',
        'no-console': [
            1,
            {
                allow: ['log', 'warn', 'error']
            }
        ],
        'accessor-pairs': 'off',
        'array-callback-return': 'off',
        complexity: [
          'error',
          {
            max: 40
          }
        ],
        'consistent-return': 'off',
        curly: [
          'error',
          'multi-line'
        ],
        'dot-location': [
          'error',
          'property'
        ],
        'dot-notation': 'warn',

        'guard-for-in': 'warn',
        'no-alert': 'warn',
        'no-caller': 'warn',
        'no-else-return': 'warn',
        'no-eq-null': 'error',
        'no-eval': 'off',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-floating-decimal': 'warn',
        'no-new': 'warn',
        'no-self-compare': 'warn',
        'no-useless-call': 'warn',
        'no-with': 'error',
        radix: 'warn',
        'wrap-iife': 'off',

        semi: 'warn',
        quotes: [
          'warn',
          'single'
        ],

        'no-mixed-spaces-and-tabs': 'warn',

        'brace-style': [
          'warn',
          '1tbs',
          {
            allowSingleLine: true
          }
        ],
        'computed-property-spacing': [
          'warn',
          'never'
        ],
        'no-multiple-empty-lines': 'warn',
        'comma-dangle': [
          'error',
          {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
          }
        ],
        'padding-line-between-statements': [
            1,
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'always',
                prev: '*',
                next: ['return']
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            }
        ]
    },

    root: true

};
