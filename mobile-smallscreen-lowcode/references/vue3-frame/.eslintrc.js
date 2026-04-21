module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    // 使用默认的配置
    extends: [
        // 'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        'vue-global-api'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        requireConfigFile: false,
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: false
        },
        sourceType: 'module'
    },
    globals: {
        // 是否允许被重写∏
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
        wx: true,
        my: true,
        // jest相关
        jest: true,
        describe: true,
        it: true,
        test: true,
        expect: true,
        weex: true,
        echarts: true
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
        'vue',
        // eslint-import-resolver-typescript 插件，@see https://www.npmjs.com/package/eslint-import-resolver-typescript
        'import'
    ],
    // [中文文档: http://eslint.cn/docs/rules/ ](http://eslint.cn/docs/rules/)
    rules: {
        'no-unused-expressions': ['error', { allowShortCircuit: true }],
        '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
        // turn on errors for missing imports
        'import/no-unresolved': 'off',
        // 只允许1个默认导出，关闭，否则不能随意export xxx
        'import/prefer-default-export': ['off'],
        // 解决vite.config.ts报错问题
        'import/no-extraneous-dependencies': 'off',
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
        curly: ['error', 'multi-line'],
        'dot-location': ['error', 'property'],
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
        quotes: ['warn', 'single'],
        'no-mixed-spaces-and-tabs': 'error',
        'brace-style': [
            'warn',
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        'computed-property-spacing': ['warn', 'never'],
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
            2,
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
        ],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'vue/multi-word-component-names': [
            'off',
            {
                ignores: []
            }
        ],
        'vue/no-v-text-v-html-on-component': [
            'off',
            {
                ignores: []
            }
        ]
    },
    overrides: [
        {
            files: ['*.ts', '*.d.ts'],
            rules: {
                'no-undef': 'off',
                'no-unused-vars': 'off'
            }
        }
    ],
    // eslint-import-resolver-typescript 插件，@see https://www.npmjs.com/package/eslint-import-resolver-typescript
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {
                project: './'
            }
        }
    },
    root: true
};
