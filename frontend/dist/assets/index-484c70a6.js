(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
    new MutationObserver((r) => {
        for (const i of r)
            if (i.type === 'childList')
                for (const o of i.addedNodes)
                    o.tagName === 'LINK' && o.rel === 'modulepreload' && n(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(r) {
        const i = {};
        return (
            r.integrity && (i.integrity = r.integrity),
            r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy),
            r.crossorigin === 'use-credentials'
                ? (i.credentials = 'include')
                : r.crossorigin === 'anonymous'
                ? (i.credentials = 'omit')
                : (i.credentials = 'same-origin'),
            i
        );
    }
    function n(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = s(r);
        fetch(r.href, i);
    }
})();
class T {
    constructor(t) {
        this.params = t;
    }
    async getHtml() {
        return '';
    }
}
const Ye = () => `
    <div class='login-wrapper'>
        <i class="fa-solid fa-x login-close-btn"></i>
        <h2 class="login-title">로그인</h2>
        <h3 class='form-title'>아이디</h3>
        <div class='form-input-wrapper'><input class="login-input" type="text" /></div>
        <h3 class='form-title'>비밀번호</h3>
        <div class='form-input-wrapper'>
            <input class="login-password-input password-input" type="password"/>
            <i class="fa-solid fa-eye hidden"></i>
        </div>
        <button class="login-btn">로그인하기</button>
        <div class="form-txt-wrapper">
            <span class="form-txt">아직 회원이 아니신가요?</span>
            <span class="form-txt link-to-join">회원가입 하기 ></span>
        </div>
    </div>
    `,
    Ge = () => `
    <div class='join-container'>
        <i class="fa-solid fa-x join-close-btn"></i>
        <h2 class='join-title'>회원가입</h2>

        <h3 class='form-title'>이름</h3>
        <div class='form-input-wrapper'>
            <input class="name-input" type="text" />
        </div>

        <h3 class='form-title'>아이디</h3>
        <div class='form-input-wrapper'>
            <input class="id-input" type="text" />
        </div>

        <h3 class='form-title'>비밀번호</h3>
        <div class="input-check-wrapper" id="join-password-wrapper">
            <div class='form-input-wrapper'>
                <input class="join-password-input password-input" type="password" placeholder="영어 소문자, 숫자, 특수기호 포함 최소 8자"/>
                <i class="fa-solid fa-eye hidden"></i>
            </div>
            <i class="fa-solid fa-check"></i>
        </div>

        <h3 class='form-title'>비밀번호 확인</h3>
        <div class="input-check-wrapper" id="join-passwordcheck-wrapper">
            <div class='form-input-wrapper'>
                <input class="join-passwordcheck-input  password-input" type="password" placeholder="비밀번호와 일치해야 합니다."/>
                <i class="fa-solid fa-eye hidden"></i>
            </div>
            <i class="fa-solid fa-check"></i>
        </div>

        <h3 class='form-title'>이메일</h3>
        <div class="input-check-wrapper" id="join-email-wrapper">
            <div class='form-input-wrapper'>
                <input
                type="email"
                placeholder="올바른 이메일 양식을 입력해주세요"
                class="join-email-input"/>
            </div>
            <i class=" fa-solid fa-check"></i>
        </div>

        <button class='register-btn'>회원가입하기</button>
        <div class="form-txt-wrapper">
            <span class="form-txt">이미 회원이신가요?</span>
            <span class="form-txt link-to-login">로그인 하기 ></span>
        </div>
    </div> 
`;
let X = !1;
const Z = (e, t) => {
        X = !0;
        const s = `
    <div class='modal-wrapper'>
    ${e == 'CREATED' ? Qe(t) : Ze(t)}
    </div>
    `;
        return setTimeout(Xe, 4e3), s;
    },
    Xe = () => {
        const e = document.querySelector('.modal-wrapper');
        X && e !== null && ((X = !1), e.remove());
    },
    Ze = (e) => `
    <i class="fa-solid fa-circle-check"></i>
    <p>${e}</p>
    `,
    Qe = (e) => `
    <i class="fa-solid fa-circle-exclamation"></i>
    <p>${e}</p>`;
class et extends T {
    async getHtml() {
        return `
        <div class="home-container">
          <div class="container">
            <div class="main-wrapper">
              <div class="title-wrapper"><h1>DOROTHY</h1></div>
              <div class="btn-wrapper">
                <button class="home-login-btn home-btn">로그인</button>
                <button class="home-join-btn home-btn">회원가입</button>
              </div>
            </div>
          </div>
          ${Ye()}
          ${Ge()}
        </div>
        `;
    }
}
class tt extends T {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    <h2>안녕하세요, 사용자님!</h2>
                </div>
                <div class="content-container">
                    <div class="attendance-wrapper"><span>> 내 출석현황</span>
                        <div class="calendar-wrapper">
                            <article class="calendar"><div class="calendar-head">5<span class="day">Sun</span></div></article>
                            <article class="calendar"><div class="calendar-head">6<span class="day">Mon</span></div></article>
                            <article class="calendar"><div class="calendar-head">7<span class="day">Tue</span></div></article>
                            <article class="calendar"><div class="calendar-head">8<span class="day">Wed</span></div></article>
                            <article class="calendar"><div class="calendar-head">9<span class="day">Thu</span></div></article>
                            <article class="calendar"><div class="calendar-head">10<span class="day">Fri</span></div></article>
                            <article class="calendar"><div class="calendar-head">11<span class="day">Sat</span></div></article>
                        </div>
                    </div>
                    <div class="contour"></div>
                    <div class="rental-wrapper">> 내 공간대여현황
                        <div class="rental-card-wrapper">
                            <div class="rental"><div class="rental-icon"><img class="place-icon" src="/src/assets/game.svg"></img></div>15:00~15:30</div>
                            <div class="rental"><div class="rental-icon"><img class="place-icon" src="/src/assets/room.svg"></img></div>16:00~17:00</div>
                        </div>
                    </div>
                    <div class="contour"></div>
                    <div class="chart-wrapper">> 전체 출석현황
                        <div class="daily-ratio-wrapper">
                            <div class="block"></div>
                            <div class="block"></div>
                            <div class="block"></div>
                        </div>
                        <ul class="legend">
                            <li>출석</li>
                            <li>지각</li>
                            <li>결석</li>
                        </ul>
                    </div>
                </div>
                <section class="profile-container">
                    <div class="image-container"><img src="https://ca.slack-edge.com/T04AE6CRWMB-U04GTQ0SHRT-badeda2b168f-512" alt="my-profile"></div>
                    <div class="department-container">
                        <select class="track-select-container">
                            <option value="1">현대자동차그룹 소프티어 부트캠프 2023</option>
                            <option value="2">우아한 테크캠프</option>
                            <option value="3">코드스쿼드 마스터즈 코스</option>
                        </select>
                        <div class="team-container">웹 프론트엔드</div>
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
const st = [
        { id: 1, name: '교실', img: '/src/assets/room.svg', alt: '교실이미지' },
        {
            id: 2,
            name: '방음부스',
            img: '/src/assets/soundless.svg',
            alt: '방음부스',
        },
        { id: 3, name: '게임', img: '/src/assets/game.svg', alt: '게임' },
        { id: 4, name: '휴식실', img: '/src/assets/chair.svg', alt: '휴식실' },
        {
            id: 5,
            name: '커피머신',
            img: '/src/assets/coffee.svg',
            alt: '커피머신',
        },
        {
            id: 6,
            name: '전문서적',
            img: '/src/assets/bookshelf.svg',
            alt: '전문서적',
        },
    ],
    P = (e) => `<h2 class="page-title">${e}</h2>`,
    nt = (e, t) => `
    <figure class="place-wrapper">
        <img class="place-image" src=${t}></img>
        <figcaption class="place-name">
            ${e}
        </figcaption>
    </figure>
    `;
class rt extends T {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${P('공간대여 하실 건가요?')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <div class="places-container">
                    ${st.map((t) => nt(t.name, t.img)).join('')}
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
class pe extends T {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${P('대여를 원하시는 시간대를 선택해주세요')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <header class="schedule-header">
                        <div class="schedule-wrapper">
                            <div class="rental-icon"><img class="place-icon" src="/src/assets/chair.svg"></div>
                            현재 선택 가능한 시간대
                            <div class="rental-left">48</div>
                        </div>
                    <header>
                    <section class="time-container">
                        <div class="time-line">
                            <h6 class="time-hour">10시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">11시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                        <div class="time-line">
                            <h6 class="time-hour">12시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">13시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                        <div class="time-line">
                            <h6 class="time-hour">14시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">15시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                        <div class="time-line">
                            <h6 class="time-hour">16시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">17시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                        <div class="time-line">
                            <h6 class="time-hour">18시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                            <h6 class="time-hour">19시</h6>
                            <figure class="time-box">00분</figure>
                            <figure class="time-box">15분</figure>
                            <figure class="time-box">30분</figure>
                            <figure class="time-box">45분</figure>
                        </div>
                    </section>
                    <button class="rental-confirm">대여할게요</button>
                </section>
            </div>
        </div>
        `;
    }
}
const it = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    ot = (e) => {
        const t = new Date(e).getFullYear(),
            s = new Date(e).getMonth() + 1,
            n = new Date(e.setDate(1)).getDay(),
            r = new Date(t, s, 0).getDate(),
            i = n + r,
            o = Math.ceil(i / 7) * 7;
        let c = '';
        it.map((u) => {
            c += `<div class="${u} dayofWeek">${u}</div>`;
        });
        for (let u = 0; u < n; u++) c += '<div class="no-color"></div>';
        for (let u = 1; u <= r; u++) c += `<div class="day-wrapper">${u}</div>`;
        for (let u = i; u < o; u++) c += '<div class="no-color"></div>';
        return c;
    };
class at extends T {
    async getHtml() {
        const t = new Date();
        return `
        <div class="container">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${P('월간 출석체크')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <header class="calendar-header">
                        <i class="fa-solid fa-circle-left fa-2x"></i>
                        <div class="month-container">
                            <span class="year-wrapper">${t.getFullYear()}</span>
                            <span class="month-wrapper">
                            ${t.getMonth() + 1}
                            </span>
                        </div>
                        <i class="fa-solid fa-circle-right fa-2x"></i>
                    </header>
                    <div class='calendar-container'>
                    ${ot(t)}
                    </div>
                </section> 
            </div>
        </div>
        `;
    }
}
let ct = class extends T {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${P('공지사항')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    
                </section>
            </div>
        </div>
        `;
    }
};
class me extends T {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${P('트랙을 선택하세요')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <section class="track-container">
                        <figure class="track-wrapper">
                            <img class="track-image" src="/src/assets/chair.svg"></img>
                            <figcaption class="track-name">현대자동차그룹 소프티어 부트캠프 2023</figcaption>
                        </figure>
                        <figure class="track-wrapper">
                            <img class="track-image" src="/src/assets/chair.svg"></img>
                            <figcaption class="track-name">현대자동차그룹 소프티어 부트캠프 2023</figcaption>
                        </figure>
                        
                    </section>
                </section>
            </div>
        </div>
        `;
    }
}
class lt extends T {
    async getHtml() {
        return `
        <div class="container Start">
            <div class="main-wrapper">
                <div class="title-wrapper Mini"><h1>DOROTHY</h1></div>
                <div class="name-wrapper">
                    ${P('404-Not Found')}
                </div>
                <div class="content-container">
                </div>
                <section class="big-content-container">
                    <div class="cube">
                        <div class="face front">1</div>
                        <div class="face back">2</div>
                        <div class="face right">3</div>
                        <div class="face left">4</div>
                        <div class="face top">5</div>
                        <div class="face bottom">6</div>
                    </div>
                </section>
            </div>
        </div>
        `;
    }
}
function Ae(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: Le } = Object.prototype,
    { getPrototypeOf: ie } = Object,
    oe = ((e) => (t) => {
        const s = Le.call(t);
        return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    O = (e) => ((e = e.toLowerCase()), (t) => oe(t) === e),
    I = (e) => (t) => typeof t === e,
    { isArray: k } = Array,
    C = I('undefined');
function ut(e) {
    return (
        e !== null &&
        !C(e) &&
        e.constructor !== null &&
        !C(e.constructor) &&
        R(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const Pe = O('ArrayBuffer');
function dt(e) {
    let t;
    return (
        typeof ArrayBuffer < 'u' && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && Pe(e.buffer)),
        t
    );
}
const ft = I('string'),
    R = I('function'),
    ke = I('number'),
    ae = (e) => e !== null && typeof e == 'object',
    pt = (e) => e === !0 || e === !1,
    U = (e) => {
        if (oe(e) !== 'object') return !1;
        const t = ie(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        );
    },
    mt = O('Date'),
    ht = O('File'),
    gt = O('Blob'),
    wt = O('FileList'),
    yt = (e) => ae(e) && R(e.pipe),
    vt = (e) => {
        const t = '[object FormData]';
        return (
            e &&
            ((typeof FormData == 'function' && e instanceof FormData) ||
                Le.call(e) === t ||
                (R(e.toString) && e.toString() === t))
        );
    },
    bt = O('URLSearchParams'),
    St = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function D(e, t, { allOwnKeys: s = !1 } = {}) {
    if (e === null || typeof e > 'u') return;
    let n, r;
    if ((typeof e != 'object' && (e = [e]), k(e)))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
    else {
        const i = s ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = i.length;
        let c;
        for (n = 0; n < o; n++) (c = i[n]), t.call(null, e[c], c, e);
    }
}
function Ne(e, t) {
    t = t.toLowerCase();
    const s = Object.keys(e);
    let n = s.length,
        r;
    for (; n-- > 0; ) if (((r = s[n]), t === r.toLowerCase())) return r;
    return null;
}
const Ce = (() =>
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
            ? self
            : typeof window < 'u'
            ? window
            : global)(),
    De = (e) => !C(e) && e !== Ce;
function Q() {
    const { caseless: e } = (De(this) && this) || {},
        t = {},
        s = (n, r) => {
            const i = (e && Ne(t, r)) || r;
            U(t[i]) && U(n)
                ? (t[i] = Q(t[i], n))
                : U(n)
                ? (t[i] = Q({}, n))
                : k(n)
                ? (t[i] = n.slice())
                : (t[i] = n);
        };
    for (let n = 0, r = arguments.length; n < r; n++)
        arguments[n] && D(arguments[n], s);
    return t;
}
const Et = (e, t, s, { allOwnKeys: n } = {}) => (
        D(
            t,
            (r, i) => {
                s && R(r) ? (e[i] = Ae(r, s)) : (e[i] = r);
            },
            { allOwnKeys: n },
        ),
        e
    ),
    Ot = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    xt = (e, t, s, n) => {
        (e.prototype = Object.create(t.prototype, n)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, 'super', { value: t.prototype }),
            s && Object.assign(e.prototype, s);
    },
    Rt = (e, t, s, n) => {
        let r, i, o;
        const c = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
                (o = r[i]),
                    (!n || n(o, e, t)) && !c[o] && ((t[o] = e[o]), (c[o] = !0));
            e = s !== !1 && ie(e);
        } while (e && (!s || s(e, t)) && e !== Object.prototype);
        return t;
    },
    Tt = (e, t, s) => {
        (e = String(e)),
            (s === void 0 || s > e.length) && (s = e.length),
            (s -= t.length);
        const n = e.indexOf(t, s);
        return n !== -1 && n === s;
    },
    At = (e) => {
        if (!e) return null;
        if (k(e)) return e;
        let t = e.length;
        if (!ke(t)) return null;
        const s = new Array(t);
        for (; t-- > 0; ) s[t] = e[t];
        return s;
    },
    Lt = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < 'u' && ie(Uint8Array)),
    Pt = (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
            const i = r.value;
            t.call(e, i[0], i[1]);
        }
    },
    kt = (e, t) => {
        let s;
        const n = [];
        for (; (s = e.exec(t)) !== null; ) n.push(s);
        return n;
    },
    Nt = O('HTMLFormElement'),
    Ct = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (s, n, r) {
            return n.toUpperCase() + r;
        }),
    he = (
        ({ hasOwnProperty: e }) =>
        (t, s) =>
            e.call(t, s)
    )(Object.prototype),
    Dt = O('RegExp'),
    Fe = (e, t) => {
        const s = Object.getOwnPropertyDescriptors(e),
            n = {};
        D(s, (r, i) => {
            t(r, i, e) !== !1 && (n[i] = r);
        }),
            Object.defineProperties(e, n);
    },
    Ft = (e) => {
        Fe(e, (t, s) => {
            if (R(e) && ['arguments', 'caller', 'callee'].indexOf(s) !== -1)
                return !1;
            const n = e[s];
            if (R(n)) {
                if (((t.enumerable = !1), 'writable' in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + s + "'",
                        );
                    });
            }
        });
    },
    jt = (e, t) => {
        const s = {},
            n = (r) => {
                r.forEach((i) => {
                    s[i] = !0;
                });
            };
        return k(e) ? n(e) : n(String(e).split(t)), s;
    },
    qt = () => {},
    Ut = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    V = 'abcdefghijklmnopqrstuvwxyz',
    ge = '0123456789',
    je = { DIGIT: ge, ALPHA: V, ALPHA_DIGIT: V + V.toUpperCase() + ge },
    _t = (e = 16, t = je.ALPHA_DIGIT) => {
        let s = '';
        const { length: n } = t;
        for (; e--; ) s += t[(Math.random() * n) | 0];
        return s;
    };
function Bt(e) {
    return !!(
        e &&
        R(e.append) &&
        e[Symbol.toStringTag] === 'FormData' &&
        e[Symbol.iterator]
    );
}
const Mt = (e) => {
        const t = new Array(10),
            s = (n, r) => {
                if (ae(n)) {
                    if (t.indexOf(n) >= 0) return;
                    if (!('toJSON' in n)) {
                        t[r] = n;
                        const i = k(n) ? [] : {};
                        return (
                            D(n, (o, c) => {
                                const u = s(o, r + 1);
                                !C(u) && (i[c] = u);
                            }),
                            (t[r] = void 0),
                            i
                        );
                    }
                }
                return n;
            };
        return s(e, 0);
    },
    a = {
        isArray: k,
        isArrayBuffer: Pe,
        isBuffer: ut,
        isFormData: vt,
        isArrayBufferView: dt,
        isString: ft,
        isNumber: ke,
        isBoolean: pt,
        isObject: ae,
        isPlainObject: U,
        isUndefined: C,
        isDate: mt,
        isFile: ht,
        isBlob: gt,
        isRegExp: Dt,
        isFunction: R,
        isStream: yt,
        isURLSearchParams: bt,
        isTypedArray: Lt,
        isFileList: wt,
        forEach: D,
        merge: Q,
        extend: Et,
        trim: St,
        stripBOM: Ot,
        inherits: xt,
        toFlatObject: Rt,
        kindOf: oe,
        kindOfTest: O,
        endsWith: Tt,
        toArray: At,
        forEachEntry: Pt,
        matchAll: kt,
        isHTMLForm: Nt,
        hasOwnProperty: he,
        hasOwnProp: he,
        reduceDescriptors: Fe,
        freezeMethods: Ft,
        toObjectSet: jt,
        toCamelCase: Ct,
        noop: qt,
        toFiniteNumber: Ut,
        findKey: Ne,
        global: Ce,
        isContextDefined: De,
        ALPHABET: je,
        generateString: _t,
        isSpecCompliantForm: Bt,
        toJSONObject: Mt,
    };
function h(e, t, s, n, r) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = 'AxiosError'),
        t && (this.code = t),
        s && (this.config = s),
        n && (this.request = n),
        r && (this.response = r);
}
a.inherits(h, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: a.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const qe = h.prototype,
    Ue = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
].forEach((e) => {
    Ue[e] = { value: e };
});
Object.defineProperties(h, Ue);
Object.defineProperty(qe, 'isAxiosError', { value: !0 });
h.from = (e, t, s, n, r, i) => {
    const o = Object.create(qe);
    return (
        a.toFlatObject(
            e,
            o,
            function (u) {
                return u !== Error.prototype;
            },
            (c) => c !== 'isAxiosError',
        ),
        h.call(o, e.message, t, s, n, r),
        (o.cause = e),
        (o.name = e.name),
        i && Object.assign(o, i),
        o
    );
};
const Ht = null;
function ee(e) {
    return a.isPlainObject(e) || a.isArray(e);
}
function _e(e) {
    return a.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function we(e, t, s) {
    return e
        ? e
              .concat(t)
              .map(function (r, i) {
                  return (r = _e(r)), !s && i ? '[' + r + ']' : r;
              })
              .join(s ? '.' : '')
        : t;
}
function It(e) {
    return a.isArray(e) && !e.some(ee);
}
const $t = a.toFlatObject(a, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function $(e, t, s) {
    if (!a.isObject(e)) throw new TypeError('target must be an object');
    (t = t || new FormData()),
        (s = a.toFlatObject(
            s,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (m, S) {
                return !a.isUndefined(S[m]);
            },
        ));
    const n = s.metaTokens,
        r = s.visitor || d,
        i = s.dots,
        o = s.indexes,
        u = (s.Blob || (typeof Blob < 'u' && Blob)) && a.isSpecCompliantForm(t);
    if (!a.isFunction(r)) throw new TypeError('visitor must be a function');
    function l(f) {
        if (f === null) return '';
        if (a.isDate(f)) return f.toISOString();
        if (!u && a.isBlob(f))
            throw new h('Blob is not supported. Use a Buffer instead.');
        return a.isArrayBuffer(f) || a.isTypedArray(f)
            ? u && typeof Blob == 'function'
                ? new Blob([f])
                : Buffer.from(f)
            : f;
    }
    function d(f, m, S) {
        let v = f;
        if (f && !S && typeof f == 'object') {
            if (a.endsWith(m, '{}'))
                (m = n ? m : m.slice(0, -2)), (f = JSON.stringify(f));
            else if (
                (a.isArray(f) && It(f)) ||
                a.isFileList(f) ||
                (a.endsWith(m, '[]') && (v = a.toArray(f)))
            )
                return (
                    (m = _e(m)),
                    v.forEach(function (j, Ke) {
                        !(a.isUndefined(j) || j === null) &&
                            t.append(
                                o === !0
                                    ? we([m], Ke, i)
                                    : o === null
                                    ? m
                                    : m + '[]',
                                l(j),
                            );
                    }),
                    !1
                );
        }
        return ee(f) ? !0 : (t.append(we(S, m, i), l(f)), !1);
    }
    const p = [],
        y = Object.assign($t, {
            defaultVisitor: d,
            convertValue: l,
            isVisitable: ee,
        });
    function g(f, m) {
        if (!a.isUndefined(f)) {
            if (p.indexOf(f) !== -1)
                throw Error('Circular reference detected in ' + m.join('.'));
            p.push(f),
                a.forEach(f, function (v, A) {
                    (!(a.isUndefined(v) || v === null) &&
                        r.call(t, v, a.isString(A) ? A.trim() : A, m, y)) ===
                        !0 && g(v, m ? m.concat(A) : [A]);
                }),
                p.pop();
        }
    }
    if (!a.isObject(e)) throw new TypeError('data must be an object');
    return g(e), t;
}
function ye(e) {
    const t = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\0',
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
        return t[n];
    });
}
function ce(e, t) {
    (this._pairs = []), e && $(e, this, t);
}
const Be = ce.prototype;
Be.append = function (t, s) {
    this._pairs.push([t, s]);
};
Be.toString = function (t) {
    const s = t
        ? function (n) {
              return t.call(this, n, ye);
          }
        : ye;
    return this._pairs
        .map(function (r) {
            return s(r[0]) + '=' + s(r[1]);
        }, '')
        .join('&');
};
function zt(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
function Me(e, t, s) {
    if (!t) return e;
    const n = (s && s.encode) || zt,
        r = s && s.serialize;
    let i;
    if (
        (r
            ? (i = r(t, s))
            : (i = a.isURLSearchParams(t)
                  ? t.toString()
                  : new ce(t, s).toString(n)),
        i)
    ) {
        const o = e.indexOf('#');
        o !== -1 && (e = e.slice(0, o)),
            (e += (e.indexOf('?') === -1 ? '?' : '&') + i);
    }
    return e;
}
class Jt {
    constructor() {
        this.handlers = [];
    }
    use(t, s, n) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: s,
                synchronous: n ? n.synchronous : !1,
                runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        a.forEach(this.handlers, function (n) {
            n !== null && t(n);
        });
    }
}
const ve = Jt,
    He = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Wt = typeof URLSearchParams < 'u' ? URLSearchParams : ce,
    Vt = FormData,
    Kt = (() => {
        let e;
        return typeof navigator < 'u' &&
            ((e = navigator.product) === 'ReactNative' ||
                e === 'NativeScript' ||
                e === 'NS')
            ? !1
            : typeof window < 'u' && typeof document < 'u';
    })(),
    Yt = (() =>
        typeof WorkerGlobalScope < 'u' &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == 'function')(),
    b = {
        isBrowser: !0,
        classes: { URLSearchParams: Wt, FormData: Vt, Blob },
        isStandardBrowserEnv: Kt,
        isStandardBrowserWebWorkerEnv: Yt,
        protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    };
function Gt(e, t) {
    return $(
        e,
        new b.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (s, n, r, i) {
                    return b.isNode && a.isBuffer(s)
                        ? (this.append(n, s.toString('base64')), !1)
                        : i.defaultVisitor.apply(this, arguments);
                },
            },
            t,
        ),
    );
}
function Xt(e) {
    return a
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function Zt(e) {
    const t = {},
        s = Object.keys(e);
    let n;
    const r = s.length;
    let i;
    for (n = 0; n < r; n++) (i = s[n]), (t[i] = e[i]);
    return t;
}
function Ie(e) {
    function t(s, n, r, i) {
        let o = s[i++];
        const c = Number.isFinite(+o),
            u = i >= s.length;
        return (
            (o = !o && a.isArray(r) ? r.length : o),
            u
                ? (a.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !c)
                : ((!r[o] || !a.isObject(r[o])) && (r[o] = []),
                  t(s, n, r[o], i) && a.isArray(r[o]) && (r[o] = Zt(r[o])),
                  !c)
        );
    }
    if (a.isFormData(e) && a.isFunction(e.entries)) {
        const s = {};
        return (
            a.forEachEntry(e, (n, r) => {
                t(Xt(n), r, s, 0);
            }),
            s
        );
    }
    return null;
}
const Qt = { 'Content-Type': void 0 };
function es(e, t, s) {
    if (a.isString(e))
        try {
            return (t || JSON.parse)(e), a.trim(e);
        } catch (n) {
            if (n.name !== 'SyntaxError') throw n;
        }
    return (s || JSON.stringify)(e);
}
const z = {
    transitional: He,
    adapter: ['xhr', 'http'],
    transformRequest: [
        function (t, s) {
            const n = s.getContentType() || '',
                r = n.indexOf('application/json') > -1,
                i = a.isObject(t);
            if (
                (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
            )
                return r && r ? JSON.stringify(Ie(t)) : t;
            if (
                a.isArrayBuffer(t) ||
                a.isBuffer(t) ||
                a.isStream(t) ||
                a.isFile(t) ||
                a.isBlob(t)
            )
                return t;
            if (a.isArrayBufferView(t)) return t.buffer;
            if (a.isURLSearchParams(t))
                return (
                    s.setContentType(
                        'application/x-www-form-urlencoded;charset=utf-8',
                        !1,
                    ),
                    t.toString()
                );
            let c;
            if (i) {
                if (n.indexOf('application/x-www-form-urlencoded') > -1)
                    return Gt(t, this.formSerializer).toString();
                if (
                    (c = a.isFileList(t)) ||
                    n.indexOf('multipart/form-data') > -1
                ) {
                    const u = this.env && this.env.FormData;
                    return $(
                        c ? { 'files[]': t } : t,
                        u && new u(),
                        this.formSerializer,
                    );
                }
            }
            return i || r
                ? (s.setContentType('application/json', !1), es(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const s = this.transitional || z.transitional,
                n = s && s.forcedJSONParsing,
                r = this.responseType === 'json';
            if (t && a.isString(t) && ((n && !this.responseType) || r)) {
                const o = !(s && s.silentJSONParsing) && r;
                try {
                    return JSON.parse(t);
                } catch (c) {
                    if (o)
                        throw c.name === 'SyntaxError'
                            ? h.from(
                                  c,
                                  h.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response,
                              )
                            : c;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: b.classes.FormData, Blob: b.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } },
};
a.forEach(['delete', 'get', 'head'], function (t) {
    z.headers[t] = {};
});
a.forEach(['post', 'put', 'patch'], function (t) {
    z.headers[t] = a.merge(Qt);
});
const le = z,
    ts = a.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
    ]),
    ss = (e) => {
        const t = {};
        let s, n, r;
        return (
            e &&
                e
                    .split(
                        `
`,
                    )
                    .forEach(function (o) {
                        (r = o.indexOf(':')),
                            (s = o.substring(0, r).trim().toLowerCase()),
                            (n = o.substring(r + 1).trim()),
                            !(!s || (t[s] && ts[s])) &&
                                (s === 'set-cookie'
                                    ? t[s]
                                        ? t[s].push(n)
                                        : (t[s] = [n])
                                    : (t[s] = t[s] ? t[s] + ', ' + n : n));
                    }),
            t
        );
    },
    be = Symbol('internals');
function N(e) {
    return e && String(e).trim().toLowerCase();
}
function _(e) {
    return e === !1 || e == null ? e : a.isArray(e) ? e.map(_) : String(e);
}
function ns(e) {
    const t = Object.create(null),
        s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    for (; (n = s.exec(e)); ) t[n[1]] = n[2];
    return t;
}
function rs(e) {
    return /^[-_a-zA-Z]+$/.test(e.trim());
}
function K(e, t, s, n) {
    if (a.isFunction(n)) return n.call(this, t, s);
    if (a.isString(t)) {
        if (a.isString(n)) return t.indexOf(n) !== -1;
        if (a.isRegExp(n)) return n.test(t);
    }
}
function is(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, s, n) => s.toUpperCase() + n);
}
function os(e, t) {
    const s = a.toCamelCase(' ' + t);
    ['get', 'set', 'has'].forEach((n) => {
        Object.defineProperty(e, n + s, {
            value: function (r, i, o) {
                return this[n].call(this, t, r, i, o);
            },
            configurable: !0,
        });
    });
}
class J {
    constructor(t) {
        t && this.set(t);
    }
    set(t, s, n) {
        const r = this;
        function i(c, u, l) {
            const d = N(u);
            if (!d) throw new Error('header name must be a non-empty string');
            const p = a.findKey(r, d);
            (!p ||
                r[p] === void 0 ||
                l === !0 ||
                (l === void 0 && r[p] !== !1)) &&
                (r[p || u] = _(c));
        }
        const o = (c, u) => a.forEach(c, (l, d) => i(l, d, u));
        return (
            a.isPlainObject(t) || t instanceof this.constructor
                ? o(t, s)
                : a.isString(t) && (t = t.trim()) && !rs(t)
                ? o(ss(t), s)
                : t != null && i(s, t, n),
            this
        );
    }
    get(t, s) {
        if (((t = N(t)), t)) {
            const n = a.findKey(this, t);
            if (n) {
                const r = this[n];
                if (!s) return r;
                if (s === !0) return ns(r);
                if (a.isFunction(s)) return s.call(this, r, n);
                if (a.isRegExp(s)) return s.exec(r);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(t, s) {
        if (((t = N(t)), t)) {
            const n = a.findKey(this, t);
            return !!(n && (!s || K(this, this[n], n, s)));
        }
        return !1;
    }
    delete(t, s) {
        const n = this;
        let r = !1;
        function i(o) {
            if (((o = N(o)), o)) {
                const c = a.findKey(n, o);
                c && (!s || K(n, n[c], c, s)) && (delete n[c], (r = !0));
            }
        }
        return a.isArray(t) ? t.forEach(i) : i(t), r;
    }
    clear(t) {
        const s = Object.keys(this);
        let n = s.length,
            r = !1;
        for (; n--; ) {
            const i = s[n];
            (!t || K(this, this[i], i, t)) && (delete this[i], (r = !0));
        }
        return r;
    }
    normalize(t) {
        const s = this,
            n = {};
        return (
            a.forEach(this, (r, i) => {
                const o = a.findKey(n, i);
                if (o) {
                    (s[o] = _(r)), delete s[i];
                    return;
                }
                const c = t ? is(i) : String(i).trim();
                c !== i && delete s[i], (s[c] = _(r)), (n[c] = !0);
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const s = Object.create(null);
        return (
            a.forEach(this, (n, r) => {
                n != null &&
                    n !== !1 &&
                    (s[r] = t && a.isArray(n) ? n.join(', ') : n);
            }),
            s
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, s]) => t + ': ' + s)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...s) {
        const n = new this(t);
        return s.forEach((r) => n.set(r)), n;
    }
    static accessor(t) {
        const n = (this[be] = this[be] = { accessors: {} }).accessors,
            r = this.prototype;
        function i(o) {
            const c = N(o);
            n[c] || (os(r, o), (n[c] = !0));
        }
        return a.isArray(t) ? t.forEach(i) : i(t), this;
    }
}
J.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
]);
a.freezeMethods(J.prototype);
a.freezeMethods(J);
const E = J;
function Y(e, t) {
    const s = this || le,
        n = t || s,
        r = E.from(n.headers);
    let i = n.data;
    return (
        a.forEach(e, function (c) {
            i = c.call(s, i, r.normalize(), t ? t.status : void 0);
        }),
        r.normalize(),
        i
    );
}
function $e(e) {
    return !!(e && e.__CANCEL__);
}
function F(e, t, s) {
    h.call(this, e ?? 'canceled', h.ERR_CANCELED, t, s),
        (this.name = 'CanceledError');
}
a.inherits(F, h, { __CANCEL__: !0 });
function as(e, t, s) {
    const n = s.config.validateStatus;
    !s.status || !n || n(s.status)
        ? e(s)
        : t(
              new h(
                  'Request failed with status code ' + s.status,
                  [h.ERR_BAD_REQUEST, h.ERR_BAD_RESPONSE][
                      Math.floor(s.status / 100) - 4
                  ],
                  s.config,
                  s.request,
                  s,
              ),
          );
}
const cs = b.isStandardBrowserEnv
    ? (function () {
          return {
              write: function (s, n, r, i, o, c) {
                  const u = [];
                  u.push(s + '=' + encodeURIComponent(n)),
                      a.isNumber(r) &&
                          u.push('expires=' + new Date(r).toGMTString()),
                      a.isString(i) && u.push('path=' + i),
                      a.isString(o) && u.push('domain=' + o),
                      c === !0 && u.push('secure'),
                      (document.cookie = u.join('; '));
              },
              read: function (s) {
                  const n = document.cookie.match(
                      new RegExp('(^|;\\s*)(' + s + ')=([^;]*)'),
                  );
                  return n ? decodeURIComponent(n[3]) : null;
              },
              remove: function (s) {
                  this.write(s, '', Date.now() - 864e5);
              },
          };
      })()
    : (function () {
          return {
              write: function () {},
              read: function () {
                  return null;
              },
              remove: function () {},
          };
      })();
function ls(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function us(e, t) {
    return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function ze(e, t) {
    return e && !ls(t) ? us(e, t) : t;
}
const ds = b.isStandardBrowserEnv
    ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
              s = document.createElement('a');
          let n;
          function r(i) {
              let o = i;
              return (
                  t && (s.setAttribute('href', o), (o = s.href)),
                  s.setAttribute('href', o),
                  {
                      href: s.href,
                      protocol: s.protocol ? s.protocol.replace(/:$/, '') : '',
                      host: s.host,
                      search: s.search ? s.search.replace(/^\?/, '') : '',
                      hash: s.hash ? s.hash.replace(/^#/, '') : '',
                      hostname: s.hostname,
                      port: s.port,
                      pathname:
                          s.pathname.charAt(0) === '/'
                              ? s.pathname
                              : '/' + s.pathname,
                  }
              );
          }
          return (
              (n = r(window.location.href)),
              function (o) {
                  const c = a.isString(o) ? r(o) : o;
                  return c.protocol === n.protocol && c.host === n.host;
              }
          );
      })()
    : (function () {
          return function () {
              return !0;
          };
      })();
function fs(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || '';
}
function ps(e, t) {
    e = e || 10;
    const s = new Array(e),
        n = new Array(e);
    let r = 0,
        i = 0,
        o;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (u) {
            const l = Date.now(),
                d = n[i];
            o || (o = l), (s[r] = u), (n[r] = l);
            let p = i,
                y = 0;
            for (; p !== r; ) (y += s[p++]), (p = p % e);
            if (((r = (r + 1) % e), r === i && (i = (i + 1) % e), l - o < t))
                return;
            const g = d && l - d;
            return g ? Math.round((y * 1e3) / g) : void 0;
        }
    );
}
function Se(e, t) {
    let s = 0;
    const n = ps(50, 250);
    return (r) => {
        const i = r.loaded,
            o = r.lengthComputable ? r.total : void 0,
            c = i - s,
            u = n(c),
            l = i <= o;
        s = i;
        const d = {
            loaded: i,
            total: o,
            progress: o ? i / o : void 0,
            bytes: c,
            rate: u || void 0,
            estimated: u && o && l ? (o - i) / u : void 0,
            event: r,
        };
        (d[t ? 'download' : 'upload'] = !0), e(d);
    };
}
const ms = typeof XMLHttpRequest < 'u',
    hs =
        ms &&
        function (e) {
            return new Promise(function (s, n) {
                let r = e.data;
                const i = E.from(e.headers).normalize(),
                    o = e.responseType;
                let c;
                function u() {
                    e.cancelToken && e.cancelToken.unsubscribe(c),
                        e.signal && e.signal.removeEventListener('abort', c);
                }
                a.isFormData(r) &&
                    (b.isStandardBrowserEnv ||
                        b.isStandardBrowserWebWorkerEnv) &&
                    i.setContentType(!1);
                let l = new XMLHttpRequest();
                if (e.auth) {
                    const g = e.auth.username || '',
                        f = e.auth.password
                            ? unescape(encodeURIComponent(e.auth.password))
                            : '';
                    i.set('Authorization', 'Basic ' + btoa(g + ':' + f));
                }
                const d = ze(e.baseURL, e.url);
                l.open(
                    e.method.toUpperCase(),
                    Me(d, e.params, e.paramsSerializer),
                    !0,
                ),
                    (l.timeout = e.timeout);
                function p() {
                    if (!l) return;
                    const g = E.from(
                            'getAllResponseHeaders' in l &&
                                l.getAllResponseHeaders(),
                        ),
                        m = {
                            data:
                                !o || o === 'text' || o === 'json'
                                    ? l.responseText
                                    : l.response,
                            status: l.status,
                            statusText: l.statusText,
                            headers: g,
                            config: e,
                            request: l,
                        };
                    as(
                        function (v) {
                            s(v), u();
                        },
                        function (v) {
                            n(v), u();
                        },
                        m,
                    ),
                        (l = null);
                }
                if (
                    ('onloadend' in l
                        ? (l.onloadend = p)
                        : (l.onreadystatechange = function () {
                              !l ||
                                  l.readyState !== 4 ||
                                  (l.status === 0 &&
                                      !(
                                          l.responseURL &&
                                          l.responseURL.indexOf('file:') === 0
                                      )) ||
                                  setTimeout(p);
                          }),
                    (l.onabort = function () {
                        l &&
                            (n(new h('Request aborted', h.ECONNABORTED, e, l)),
                            (l = null));
                    }),
                    (l.onerror = function () {
                        n(new h('Network Error', h.ERR_NETWORK, e, l)),
                            (l = null);
                    }),
                    (l.ontimeout = function () {
                        let f = e.timeout
                            ? 'timeout of ' + e.timeout + 'ms exceeded'
                            : 'timeout exceeded';
                        const m = e.transitional || He;
                        e.timeoutErrorMessage && (f = e.timeoutErrorMessage),
                            n(
                                new h(
                                    f,
                                    m.clarifyTimeoutError
                                        ? h.ETIMEDOUT
                                        : h.ECONNABORTED,
                                    e,
                                    l,
                                ),
                            ),
                            (l = null);
                    }),
                    b.isStandardBrowserEnv)
                ) {
                    const g =
                        (e.withCredentials || ds(d)) &&
                        e.xsrfCookieName &&
                        cs.read(e.xsrfCookieName);
                    g && i.set(e.xsrfHeaderName, g);
                }
                r === void 0 && i.setContentType(null),
                    'setRequestHeader' in l &&
                        a.forEach(i.toJSON(), function (f, m) {
                            l.setRequestHeader(m, f);
                        }),
                    a.isUndefined(e.withCredentials) ||
                        (l.withCredentials = !!e.withCredentials),
                    o && o !== 'json' && (l.responseType = e.responseType),
                    typeof e.onDownloadProgress == 'function' &&
                        l.addEventListener(
                            'progress',
                            Se(e.onDownloadProgress, !0),
                        ),
                    typeof e.onUploadProgress == 'function' &&
                        l.upload &&
                        l.upload.addEventListener(
                            'progress',
                            Se(e.onUploadProgress),
                        ),
                    (e.cancelToken || e.signal) &&
                        ((c = (g) => {
                            l &&
                                (n(!g || g.type ? new F(null, e, l) : g),
                                l.abort(),
                                (l = null));
                        }),
                        e.cancelToken && e.cancelToken.subscribe(c),
                        e.signal &&
                            (e.signal.aborted
                                ? c()
                                : e.signal.addEventListener('abort', c)));
                const y = fs(d);
                if (y && b.protocols.indexOf(y) === -1) {
                    n(
                        new h(
                            'Unsupported protocol ' + y + ':',
                            h.ERR_BAD_REQUEST,
                            e,
                        ),
                    );
                    return;
                }
                l.send(r || null);
            });
        },
    B = { http: Ht, xhr: hs };
a.forEach(B, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, 'name', { value: t });
        } catch {}
        Object.defineProperty(e, 'adapterName', { value: t });
    }
});
const gs = {
    getAdapter: (e) => {
        e = a.isArray(e) ? e : [e];
        const { length: t } = e;
        let s, n;
        for (
            let r = 0;
            r < t &&
            ((s = e[r]), !(n = a.isString(s) ? B[s.toLowerCase()] : s));
            r++
        );
        if (!n)
            throw n === !1
                ? new h(
                      `Adapter ${s} is not supported by the environment`,
                      'ERR_NOT_SUPPORT',
                  )
                : new Error(
                      a.hasOwnProp(B, s)
                          ? `Adapter '${s}' is not available in the build`
                          : `Unknown adapter '${s}'`,
                  );
        if (!a.isFunction(n)) throw new TypeError('adapter is not a function');
        return n;
    },
    adapters: B,
};
function G(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new F(null, e);
}
function Ee(e) {
    return (
        G(e),
        (e.headers = E.from(e.headers)),
        (e.data = Y.call(e, e.transformRequest)),
        ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
        gs
            .getAdapter(e.adapter || le.adapter)(e)
            .then(
                function (n) {
                    return (
                        G(e),
                        (n.data = Y.call(e, e.transformResponse, n)),
                        (n.headers = E.from(n.headers)),
                        n
                    );
                },
                function (n) {
                    return (
                        $e(n) ||
                            (G(e),
                            n &&
                                n.response &&
                                ((n.response.data = Y.call(
                                    e,
                                    e.transformResponse,
                                    n.response,
                                )),
                                (n.response.headers = E.from(
                                    n.response.headers,
                                )))),
                        Promise.reject(n)
                    );
                },
            )
    );
}
const Oe = (e) => (e instanceof E ? e.toJSON() : e);
function L(e, t) {
    t = t || {};
    const s = {};
    function n(l, d, p) {
        return a.isPlainObject(l) && a.isPlainObject(d)
            ? a.merge.call({ caseless: p }, l, d)
            : a.isPlainObject(d)
            ? a.merge({}, d)
            : a.isArray(d)
            ? d.slice()
            : d;
    }
    function r(l, d, p) {
        if (a.isUndefined(d)) {
            if (!a.isUndefined(l)) return n(void 0, l, p);
        } else return n(l, d, p);
    }
    function i(l, d) {
        if (!a.isUndefined(d)) return n(void 0, d);
    }
    function o(l, d) {
        if (a.isUndefined(d)) {
            if (!a.isUndefined(l)) return n(void 0, l);
        } else return n(void 0, d);
    }
    function c(l, d, p) {
        if (p in t) return n(l, d);
        if (p in e) return n(void 0, l);
    }
    const u = {
        url: i,
        method: i,
        data: i,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: c,
        headers: (l, d) => r(Oe(l), Oe(d), !0),
    };
    return (
        a.forEach(Object.keys(e).concat(Object.keys(t)), function (d) {
            const p = u[d] || r,
                y = p(e[d], t[d], d);
            (a.isUndefined(y) && p !== c) || (s[d] = y);
        }),
        s
    );
}
const Je = '1.3.0',
    ue = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (e, t) => {
        ue[e] = function (n) {
            return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
        };
    },
);
const xe = {};
ue.transitional = function (t, s, n) {
    function r(i, o) {
        return (
            '[Axios v' +
            Je +
            "] Transitional option '" +
            i +
            "'" +
            o +
            (n ? '. ' + n : '')
        );
    }
    return (i, o, c) => {
        if (t === !1)
            throw new h(
                r(o, ' has been removed' + (s ? ' in ' + s : '')),
                h.ERR_DEPRECATED,
            );
        return (
            s &&
                !xe[o] &&
                ((xe[o] = !0),
                console.warn(
                    r(
                        o,
                        ' has been deprecated since v' +
                            s +
                            ' and will be removed in the near future',
                    ),
                )),
            t ? t(i, o, c) : !0
        );
    };
};
function ws(e, t, s) {
    if (typeof e != 'object')
        throw new h('options must be an object', h.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(e);
    let r = n.length;
    for (; r-- > 0; ) {
        const i = n[r],
            o = t[i];
        if (o) {
            const c = e[i],
                u = c === void 0 || o(c, i, e);
            if (u !== !0)
                throw new h(
                    'option ' + i + ' must be ' + u,
                    h.ERR_BAD_OPTION_VALUE,
                );
            continue;
        }
        if (s !== !0) throw new h('Unknown option ' + i, h.ERR_BAD_OPTION);
    }
}
const te = { assertOptions: ws, validators: ue },
    x = te.validators;
class H {
    constructor(t) {
        (this.defaults = t),
            (this.interceptors = { request: new ve(), response: new ve() });
    }
    request(t, s) {
        typeof t == 'string' ? ((s = s || {}), (s.url = t)) : (s = t || {}),
            (s = L(this.defaults, s));
        const { transitional: n, paramsSerializer: r, headers: i } = s;
        n !== void 0 &&
            te.assertOptions(
                n,
                {
                    silentJSONParsing: x.transitional(x.boolean),
                    forcedJSONParsing: x.transitional(x.boolean),
                    clarifyTimeoutError: x.transitional(x.boolean),
                },
                !1,
            ),
            r !== void 0 &&
                te.assertOptions(
                    r,
                    { encode: x.function, serialize: x.function },
                    !0,
                ),
            (s.method = (
                s.method ||
                this.defaults.method ||
                'get'
            ).toLowerCase());
        let o;
        (o = i && a.merge(i.common, i[s.method])),
            o &&
                a.forEach(
                    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                    (f) => {
                        delete i[f];
                    },
                ),
            (s.headers = E.concat(o, i));
        const c = [];
        let u = !0;
        this.interceptors.request.forEach(function (m) {
            (typeof m.runWhen == 'function' && m.runWhen(s) === !1) ||
                ((u = u && m.synchronous), c.unshift(m.fulfilled, m.rejected));
        });
        const l = [];
        this.interceptors.response.forEach(function (m) {
            l.push(m.fulfilled, m.rejected);
        });
        let d,
            p = 0,
            y;
        if (!u) {
            const f = [Ee.bind(this), void 0];
            for (
                f.unshift.apply(f, c),
                    f.push.apply(f, l),
                    y = f.length,
                    d = Promise.resolve(s);
                p < y;

            )
                d = d.then(f[p++], f[p++]);
            return d;
        }
        y = c.length;
        let g = s;
        for (p = 0; p < y; ) {
            const f = c[p++],
                m = c[p++];
            try {
                g = f(g);
            } catch (S) {
                m.call(this, S);
                break;
            }
        }
        try {
            d = Ee.call(this, g);
        } catch (f) {
            return Promise.reject(f);
        }
        for (p = 0, y = l.length; p < y; ) d = d.then(l[p++], l[p++]);
        return d;
    }
    getUri(t) {
        t = L(this.defaults, t);
        const s = ze(t.baseURL, t.url);
        return Me(s, t.params, t.paramsSerializer);
    }
}
a.forEach(['delete', 'get', 'head', 'options'], function (t) {
    H.prototype[t] = function (s, n) {
        return this.request(
            L(n || {}, { method: t, url: s, data: (n || {}).data }),
        );
    };
});
a.forEach(['post', 'put', 'patch'], function (t) {
    function s(n) {
        return function (i, o, c) {
            return this.request(
                L(c || {}, {
                    method: t,
                    headers: n ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: i,
                    data: o,
                }),
            );
        };
    }
    (H.prototype[t] = s()), (H.prototype[t + 'Form'] = s(!0));
});
const M = H;
class de {
    constructor(t) {
        if (typeof t != 'function')
            throw new TypeError('executor must be a function.');
        let s;
        this.promise = new Promise(function (i) {
            s = i;
        });
        const n = this;
        this.promise.then((r) => {
            if (!n._listeners) return;
            let i = n._listeners.length;
            for (; i-- > 0; ) n._listeners[i](r);
            n._listeners = null;
        }),
            (this.promise.then = (r) => {
                let i;
                const o = new Promise((c) => {
                    n.subscribe(c), (i = c);
                }).then(r);
                return (
                    (o.cancel = function () {
                        n.unsubscribe(i);
                    }),
                    o
                );
            }),
            t(function (i, o, c) {
                n.reason || ((n.reason = new F(i, o, c)), s(n.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const s = this._listeners.indexOf(t);
        s !== -1 && this._listeners.splice(s, 1);
    }
    static source() {
        let t;
        return {
            token: new de(function (r) {
                t = r;
            }),
            cancel: t,
        };
    }
}
const ys = de;
function vs(e) {
    return function (s) {
        return e.apply(null, s);
    };
}
function bs(e) {
    return a.isObject(e) && e.isAxiosError === !0;
}
const se = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(se).forEach(([e, t]) => {
    se[t] = e;
});
const Ss = se;
function We(e) {
    const t = new M(e),
        s = Ae(M.prototype.request, t);
    return (
        a.extend(s, M.prototype, t, { allOwnKeys: !0 }),
        a.extend(s, t, null, { allOwnKeys: !0 }),
        (s.create = function (r) {
            return We(L(e, r));
        }),
        s
    );
}
const w = We(le);
w.Axios = M;
w.CanceledError = F;
w.CancelToken = ys;
w.isCancel = $e;
w.VERSION = Je;
w.toFormData = $;
w.AxiosError = h;
w.Cancel = w.CanceledError;
w.all = function (t) {
    return Promise.all(t);
};
w.spread = vs;
w.isAxiosError = bs;
w.mergeConfig = L;
w.AxiosHeaders = E;
w.formToJSON = (e) => Ie(a.isHTMLForm(e) ? new FormData(e) : e);
w.HttpStatusCode = Ss;
w.default = w;
const ne = w,
    Es = ne.create({ baseURL: 'https://dorothy-5z.site/api/v1' });
Es.defaults.withCredentials = !0;
const Re = 'https://dorothy-5z.site/api/v1',
    Ve = {
        logout: () => {
            console.log('로그아웃 되었습니다.');
        },
        getUser: (e, t) =>
            ne.post(Re + '/member/login', { memberId: e, password: t }),
        postUser: (e, t, s, n, r) =>
            ne.post(Re + '/member', {
                memberId: e,
                password: t,
                passwordCheck: s,
                name: n,
                email: r,
            }),
    },
    Os = async (e, t) => {
        try {
            const s = await Ve.getUser(e, t);
            return Promise.resolve(s.data);
        } catch (s) {
            return (
                Z(s.code, s.message), Promise.reject(s.message, '로그인 실패')
            );
        }
    },
    xs = async (e, t, s, n, r) => {
        try {
            const i = await Ve.postUser(e, t, s, n, r);
            return (
                Z(i.code, i.message),
                console.log(i.message),
                Promise.resolve(i.data)
            );
        } catch (i) {
            return (
                Z(i.code, i.message),
                console.log(i),
                Promise.reject(i.message, '회원가입 실패')
            );
        }
    };
function Rs() {
    const e = document.querySelector('.home-container'),
        t = document.querySelector('.hamburger'),
        s = e.querySelectorAll('.password-input'),
        n = document.querySelectorAll('.fa-eye'),
        r = document.querySelector('.join-email-input'),
        i = document.querySelector('.join-password-input'),
        o = document.querySelector('.join-passwordcheck-input');
    re(),
        t.classList.add('hidden'),
        e.addEventListener('click', (c) => {
            ks(c.target),
                Ns(c.target),
                js(c.target),
                Ls(c.target),
                Ts(c.target),
                As(c.target);
        }),
        s.forEach((c) => {
            c.addEventListener('input', (u) => {
                Cs(u.target);
            });
        }),
        n.forEach((c) => {
            c.addEventListener('mouseover', (u) => {
                Ds(u.target);
            });
        }),
        n.forEach((c) => {
            c.addEventListener('mouseout', (u) => {
                Fs(u.target);
            });
        }),
        r.addEventListener('input', (c) => {
            Ps(c);
        }),
        i.addEventListener('input', (c) => {
            qs(c);
        }),
        o.addEventListener('input', (c) => {
            re();
        });
}
const Ts = (e) => {
        if (!e.classList.contains('link-to-login')) return;
        const t = document.querySelector('.login-wrapper'),
            s = document.querySelector('.join-container');
        t.classList.toggle('On'), s.classList.toggle('On');
    },
    As = (e) => {
        if (!e.classList.contains('link-to-join')) return;
        const t = document.querySelector('.login-wrapper');
        document.querySelector('.join-container').classList.toggle('On'),
            t.classList.toggle('On');
    },
    Ls = (e) => {
        if (!e.classList.contains('register-btn')) return;
        const s = document
                .querySelector('.home-container')
                .querySelector('.join-container'),
            n = s.querySelector('.id-input').value,
            r = s.querySelector('.password-input').value,
            i = s.querySelector('.join-passwordcheck-input').value,
            o = s.querySelector('.name-input').value,
            c = s.querySelector('.join-email-input').value;
        xs(n, r, i, o, c), console.log(n, r, i, o, c), fe('/track');
    },
    re = () => {
        const e =
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/,
            t = document.querySelector('#join-passwordcheck-wrapper'),
            s = document.querySelector('.join-password-input'),
            n = document.querySelector('.join-passwordcheck-input'),
            r = t.querySelector('.fa-eye');
        (t.querySelector('.fa-check').style.backgroundColor =
            s.value === n.value && e.test(n.value) ? '#2b90d9' : '#b8b8b8'),
            n.value.length > 0
                ? r.classList.add('show')
                : r.classList.remove('show');
    },
    Ps = (e) => {
        const s = document
                .querySelector('#join-email-wrapper')
                .querySelector('.fa-check'),
            n = /^[_a-z0-9-]+([._a-z0-9-]+)*@(\w+\.)+\w+$/;
        s.style.backgroundColor = n.test(e.target.value)
            ? '#2b90d9'
            : '#b8b8b8';
    },
    ks = (e) => {
        if (
            !e.className.includes('home-login-btn') &&
            !e.className.includes('login-close-btn')
        )
            return;
        const t = document.querySelector('.home-container'),
            s = t.querySelector('.login-wrapper'),
            n = t.querySelector('.btn-wrapper');
        s.classList.toggle('On'), n.classList.toggle('Hidden');
    },
    Ns = (e) => {
        if (
            !e.className.includes('home-join-btn') &&
            !e.className.includes('join-close-btn')
        )
            return;
        document.querySelector('.home-container');
        const t = document.querySelector('.join-container'),
            s = document.querySelector('.btn-wrapper');
        t.classList.toggle('On'), s.classList.toggle('Hidden');
    },
    Cs = (e) => {
        const t = e.closest('div').querySelector('.fa-eye');
        e.value.length > 0
            ? (t.classList.add('show'), t.classList.remove('hidden'))
            : (t.classList.add('hidden'), t.classList.remove('show'));
    },
    Ds = (e) => {
        const s = e.closest('div').querySelector('input');
        (s.type = 'text'), e.classList.toggle('show');
    },
    Fs = (e) => {
        const s = e.closest('div').querySelector('input');
        (s.type = 'password'), e.classList.toggle('show');
    },
    js = (e) => {
        if (!e.classList.contains('login-btn')) return;
        const t = document.querySelector('.home-container'),
            s = t.querySelector('.login-wrapper'),
            n = t.querySelector('.title-wrapper'),
            r = s.querySelector('.login-input').value,
            i = s.querySelector('.password-input').value;
        console.log(r, i),
            Os(r, i),
            s.classList.toggle('On'),
            n.classList.add('Mini'),
            document.body.querySelector('.hamburger').classList.add('show'),
            document.body
                .querySelector('.home-container')
                .classList.add('Start'),
            setTimeout(() => {
                fe('/main');
            }, 1500);
    },
    qs = (e) => {
        re();
        const t =
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,16}$/,
            s = document.querySelector('#join-password-wrapper');
        s.querySelector('.fa-check').style.backgroundColor = t.test(
            e.target.value,
        )
            ? '#2b90d9'
            : '#b8b8b8';
        const n = s.querySelector('.fa-eye');
        e.target.value.length > 0
            ? n.classList.add('show')
            : n.classList.remove('show');
    };
function Us() {
    _s();
}
const _s = () => {
        navigator.geolocation
            ? navigator.geolocation.watchPosition(function (e) {
                  e.coords.latitude, e.coords.longitude;
              })
            : alert('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
    },
    Bs = (e) => {
        switch (e) {
            case '/':
                Rs();
                break;
            case '/main':
                console.log('main'), Us();
                break;
            case '/track':
                console.log('track');
                break;
        }
    },
    Ms = (e) => {
        const t = Array.from(e.matchAll(/:(\w+)/g)).map((s) => s[1]);
        return (
            console.log(t), Object.fromEntries(t.map((s, n) => [s, values[n]]))
        );
    },
    fe = (e) => {
        history.pushState(null, null, e), W();
    },
    Hs = [
        { path: '/', view: et },
        { path: '/main', view: tt },
        { path: '/track', view: me },
        { path: '/rental', view: rt },
        { path: '/rental/:id', view: pe },
        { path: '/attend', view: at },
        { path: '/notice', view: ct },
        { path: '/track', view: me },
        { path: '/tempt', view: pe },
    ],
    W = async () => {
        const e = Hs.find((s) => s.path === location.pathname),
            t = e ? new e.view() : new lt(location.pathname);
        (document.querySelector('#app').innerHTML = await t.getHtml()),
            Bs(e.path);
    };
document.addEventListener('DOMContentLoaded', () => {
    W(Ms(match));
});
window.addEventListener('popstate', W);
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        e.target.matches('[data-link]') &&
            (e.preventDefault(), fe(e.target.href));
    }),
        W();
});
const q = document.body.querySelector('.hamburger'),
    Te = document.body.querySelector('.nav');
q.addEventListener('click', (e) => {
    q.classList.contains('menuon')
        ? (Te.classList.toggle('menuon'),
          setTimeout(() => {
              q.classList.toggle('menuon');
          }, 250))
        : (q.classList.toggle('menuon'),
          setTimeout(() => {
              Te.classList.toggle('menuon');
          }, 250));
});
