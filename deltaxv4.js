(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
})();
(() => {
    let style = document.createElement('style');
    style.innerHTML = (`details > summary {
    cursor: pointer;
    transition: 0.15s;
    list-style: none;
}
details > summary:hover {
    color: hsl(0, 0%, 50%)
}
details > summary::-webkit-details-marker {
    display: none;
}
details summary ~ * {
    animation: sweep .5s ease-in-out;
}

@keyframes sweep {
    0%    {opacity: 0; transform: translateY(-10px)}
    100%  {opacity: 1; transform: translateY(0)}
}

.cheat {
    border: none;
    background: hsl(0, 0%, 20%);
    padding: 5px;
    margin: 3px;
    width: 60%;
    color: hsl(0, 0%, 100%);
    transition: 0.2s;
    border-radius: 5px;
    cursor: pointer;
}
.cheat:hover {
    background: hsl(0, 0%, 30%);
}`);

    const GUI = document.createElement('div');
    GUI.appendChild(style);
    GUI.style.width = '400px';
    //GUI.style.height = '500px';
    GUI.style.background = 'hsl(0, 0%, 10%)';
    GUI.style.borderRadius = '10px';
    GUI.style.position = 'absolute';
    GUI.style.textAlign = 'center';
    GUI.style.fontFamily = 'Nunito';
    GUI.style.color = 'white';
    GUI.style.overflow = 'hidden';
    GUI.style.top = '50px';
    GUI.style.left = '50px';
    GUI.style.background = "url('https://imgs.search.brave.com/OQdTLYqeY8nQkhCTGrDq4i0sPzJHONQhrQEXNAnXapQ/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mbGF0/LW15c3RlcmlvdXMt/Y29tcHV0ZXItaGFj/a2VyLWljb24tcmVk/LXdoaXRlLWlzb2xh/dGVkLWJsYWNrLWJh/Y2tncm91bmQtZmxh/dC1teXN0ZXJpb3Vz/LWNvbXB1dGVyLWhh/Y2tlci1pY29uLXJl/ZC0xMTI4NTUwMTQu/anBn')";
    GUI.style.backgroundSize = "500px 500px";
    GUI.style.backgroundPositionX = "-50px";
    GUI.style.backgroundPositionY = "65px";
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    GUI.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            GUI.style.top = (GUI.offsetTop - pos2) + "px";
            GUI.style.left = (GUI.offsetLeft - pos1) + "px";
        });
    });

    let header = document.createElement('div');
    GUI.appendChild(header);
    header.style.width = '100%';
    header.style.height = '35px';
    header.style.paddingTop = '2px';
    header.style.fontSize = '1.5rem';
    header.style.textAlign = 'center'
    header.innerHTML = `Delta X <span style="font-size: 0.75rem">v4.0</span>`;

    let loop;

    let close = document.createElement('button');
    header.appendChild(close);
    close.style.background = 'red';
    close.style.height = '45px';
    close.style.width = '45px';
    close.style.border = 'none';
    close.style.cursor = 'pointer';
    close.style.position = 'absolute';
    close.style.top = '-10px';
    close.style.right = '-10px';
    close.style.fontSize = '1.5rem';
    close.style.borderRadius = '10px';
    close.style.fontFamily = 'Nunito';
    close.style.fontWeight = 'bolder';
    close.style.paddingTop = '10px';
    close.style.paddingRight = '15px';
    close.innerText = 'X';
    close.onclick = () => {
        GUI.remove();
        clearInterval(loop);
        removeEventListener('keypress', toggleHidden)
    }

    let minimize = document.createElement('button');
    header.appendChild(minimize);
    minimize.style.background = '#444444';
    minimize.style.height = '45px';
    minimize.style.width = '45px';
    minimize.style.border = 'none';
    minimize.style.cursor = 'pointer';
    minimize.style.position = 'absolute';
    minimize.style.top = '-10px';
    minimize.style.left = '-10px';
    minimize.style.fontSize = '1.5rem';
    minimize.style.borderRadius = '10px';
    minimize.style.fontFamily = 'Nunito';
    minimize.style.fontWeight = 'bolder';
    minimize.style.paddingTop = '10px';
    minimize.style.paddingLeft = '15px';
    minimize.innerText = '-';
    minimize.onclick = () => {
        bodyDiv.hidden = !bodyDiv.hidden;
    }
    let bodyDiv = document.createElement('div');
    let body = document.createElement('div');
    bodyDiv.appendChild(body);
    GUI.appendChild(bodyDiv);

    body.innerHTML = (`<immm/><span id="curPageEl">${getSite(true) ? `Current gamemode: ${getSite(true)}` : 'No game detected'}</span><br><span>(Press E To Hide Panel)</span><br>`);
    body.style.display = 'block';
    body.style.margin = '10px';
    //body.style.background = 'white';
    body.style.minHeight = '70px';

    let activeCheats = document.createElement('span');
    body.appendChild(activeCheats);

    document.body.append(GUI);

    let footer = document.createElement('div');
    bodyDiv.appendChild(footer);
    footer.style.fontSize = '0.9rem';
    footer.style.paddingBottom = '5px';
    footer.innerHTML = (`<span>Edited By XtgPaNth3r#8939     GUI by OneMinesraft2#5394<br>Scripts by <a style="color: lightblue" href="https://twitter.com/glizuwu">gliz</a>, XtgPaNth3r#8939, Minesraft2, and <a style="color: lightblue" href="https://github.com/rxzyx">rxzyx</a></span>`);

    var getValues = () => new Promise((e, t) => {
        try {
            let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
            e({
                blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
                secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
            })
        } catch {
            t("Could not fetch auth details")
        }
    })
    var encodeValues = async (e, t) => {
        let d = window.crypto.getRandomValues(new Uint8Array(12));
        return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: d
        }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
            name: "AES-GCM"
        }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
    };

    function reactHandler() {
        return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
    }

    let autoAnswer, allanscor, anybing, highlightAnswers, choiceESP, autoPassword, chestESP, antiban, apc, agq, autoAnswer2, autoAnswer3, ac, mbinv, autoFrenzy, answerquestion, simulatePack, simulateBlook;

    let cheats = {
        global: {
            'Get Daily Rewards': () => {
                /**
                * @license StewartPrivateLicense-2.0.1
                * Copyright (c) Aerell McKnight 2023
                *
                * You may not reproduce or distribute any code inside this file without the licenser's permission.
                * You may not copy, modify, steal, skid, or recreate any of the code inside this file.
                * You may not under any circumstance republish any code from this file as your own.
                * 
                * ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
                * https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
                */

                /* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

                /* Update Checker start */
                (async () => { /* This is to prevent "identifier i is already declared errors" */
                let i = document.createElement('iframe');
                document.body.append(i);
                window.confirm = i.contentWindow.confirm.bind(window);
                i.remove();
                Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/getDailyRewards.js")?.answers?.[0]}`)).then(async x => {
                    if (1678980419801 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
                        /* Update Checker end */
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.alert = i.contentWindow.alert.bind(window);
                        i.remove();
                        if (!location.href.includes("play.blooket.com")) (alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/"));
                        else {
                            var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
                            axios.post("https://play.blooket.com/api/playersessions/solo", { gameMode: "Factory" }).then(({ data: { t } }) => {
                                axios.get("https://play.blooket.com/api/users/me").then(({ data: { name } }) => {
                                    axios.put("https://play.blooket.com/api/users/add-rewards", { t, name, addedTokens: 500, addedXp: 300 })
                                        .then(({ data: { dailyReward } }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                        .catch(() => alert('There was an error when adding rewards.'));
                                }).catch(() => alert('There was an error user data.'));
                            });
                        }
                    }
                });
                })();
            },
            'Auto Answer': () => { autoAnswer = !autoAnswer },
            'Answer Question': () => {
                /**
                * @license StewartPrivateLicense-2.0.1
                * Copyright (c) Aerell McKnight 2023
                *
                * You may not reproduce or distribute any code inside this file without the licenser's permission.
                * You may not copy, modify, steal, skid, or recreate any of the code inside this file.
                * You may not under any circumstance republish any code from this file as your own.
                * 
                * ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
                * https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
                */

                /* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

                /* Update Checker start */
                (async () => { /* This is to prevent "identifier i is already declared errors" */
                let i = document.createElement('iframe');
                document.body.append(i);
                window.confirm = i.contentWindow.confirm.bind(window);
                i.remove();
                Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/autoAnswer.js")?.answers?.[0]}`)).then(async x => {
                    if (1678659460186 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
                        /* Update Checker end */
                        const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                        try {
                            if (question.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
                            else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
                            else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0])
                        } catch { }
                    }
                });
                })();
            },
            'All Answers Correct': () => { allanscor = !allanscor},
            'Highlight Answers': () => { highlightAnswers = !highlightAnswers },
            'Anti-Ban': () => {
                /**
                * @license StewartPrivateLicense-2.0.1
                * Copyright (c) Aerell McKnight 2023
                *
                * You may not reproduce or distribute any code inside this file without the licenser's permission.
                * You may not copy, modify, steal, skid, or recreate any of the code inside this file.
                * You may not under any circumstance republish any code from this file as your own.
                * 
                * ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
                * https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
                */

                /* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

                /* Update Checker start */
                (async () => { /* This is to prevent "identifier i is already declared errors" */
                let i = document.createElement('iframe');
                document.body.append(i);
                window.confirm = i.contentWindow.confirm.bind(window);
                i.remove();
                Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/preventSuspension.js")?.answers?.[0]}`)).then(async x => {
                    if (1678659460243 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
                        /* Update Checker end */
                        const original_open = XMLHttpRequest.prototype.open;
                        XMLHttpRequest.prototype.open = function () {
                            if (!arguments[1].includes("suspend")) original_open.apply(this, arguments)
                        };
                    }
                });
                })();
            },
            'Answer Question': () => { answerquestion = !answerquestion },
            'Simulate Opening Pack': () => { simulatePack = !simulatePack},
            'Simulate Getting Blook': () => { simulateBlook = !simulateBlook},
            'Unlock All Blooks': () => {
                /**
                * @license StewartPrivateLicense-2.0.1
                * Copyright (c) Aerell McKnight 2023
                *
                * You may not reproduce or distribute any code inside this file without the licenser's permission.
                * You may not copy, modify, steal, skid, or recreate any of the code inside this file.
                * You may not under any circumstance republish any code from this file as your own.
                * 
                * ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
                * https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
                */

                /* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

                /* Update Checker start */
                (async () => { /* This is to prevent "identifier i is already declared errors" */
                let i = document.createElement('iframe');
                document.body.append(i);
                window.confirm = i.contentWindow.confirm.bind(window);
                i.remove();
                Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/useAnyBlook.js")?.answers?.[0]}`)).then(async x => {
                    if (1678659460277 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
                        /* Update Checker end */
                        const { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                        const blooks = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b } }, [['1234']]]).webpack("MDrD").a;
                        if (location.pathname == "/blooks") stateNode.setState({ blookData: Object.keys(blooks).reduce((a, b) => (a[b] = (stateNode.state.blookData[b] || 1), a), {}), allSets: Object.values(blooks).reduce((a, b) => (a.includes(b.set) ? a : a.concat(b.set)), []) });
                        else if (Array.isArray(stateNode.state.unlocks)) stateNode.setState({ unlocks: Object.keys(blooks) });
                        else stateNode.setState({ unlocks: blooks });
                    }
                });
                })();
            },
            'Unlock All Blooks(In Game)': () => {
                function getStateNode() {
                    for (var i of Object.keys(document.querySelector('#app > div > div'))) {
                        if (i.toString().includes('__reactEventHandlers')) {
                            for (var j of Object.values(document.querySelector("#app > div > div")[i].children.filter(n => n))) {
                                if (j._owner && j._owner.stateNode) {
                                    return j._owner.stateNode;
                                }
                            }
                        }
                    }
                }
                
                function findByProp(find) {
                    return Object.values(webpackJsonp.push([
                            [],
                            {
                                ['']: (_, a, b) => {
                                    a.cache = b.c;
                                }
                            },
                            [
                                ['']
                            ],
                        ]).cache)
                        .find((x) => {
                            if (x.exports && x.exports.a && x.exports.a[find]) {
                                return x.exports.a;
                            }
                        })
                        .exports.a;
                }
                getStateNode().state.unlocks = Object.keys(findByProp("UFO"));
                getStateNode().forceUpdate();
            },
            'Auto Sell Dupes': () => {
                let iframe = document.createElement('iframe');
                document.body.append(iframe);
                window.alert = iframe.contentWindow.alert.bind(window);
                window.confirm = iframe.contentWindow.confirm.bind(window);
                iframe.remove();
                var axios = Object.values(webpackJsonp.push([
                    [], {
                        ['']: (_, a, b) => {
                            a.cache = b.c
                        },
                    },
                    [
                        ['']
                    ],
                ]).cache).find((x) => x.exports?.a?.get).exports.a;
                axios.get("/api/users").then(async ({ data: { name, unlocks } }) => {
                    let blooks = Object.entries(unlocks).filter(x => x[1] > 1);
                    for (var [blook, amount] of blooks) await axios.put("/api/users/sellblook", { name, blook, numSold: amount - 1 });
                    alert(`Sold Blooks: \n${blooks.map(([blook, amount]) => `- ${blook} ${amount - 1}`).join(`\n`)}`);
                });
            },
            'Bypass Random Nicknames': () => {
                Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state.isRandom = false;
                document.getElementsByClassName("styles__randomButton___3CTp0-camelCase")[0].click();
            },
            'Game Flooder/Bots': () => {
                function _0x27b134(_0x4c006c,_0x2a5a96,_0x382f12,_0x12d62e,_0x16fb1d){return _0x4b80(_0x4c006c-0x325,_0x2a5a96);}(function(_0x44b27c,_0x500243){function _0x2eb5db(_0x5c6c45,_0x18b6b3,_0x20cbfa,_0x3e0c75,_0x8aa4c9){return _0x4b80(_0x5c6c45-0x9a,_0x3e0c75);}function _0x4ba626(_0x33a40a,_0x1a78eb,_0x5efe79,_0xe0c930,_0x10b176){return _0x4b80(_0x1a78eb- -0x22,_0xe0c930);}function _0x533a43(_0x3e523e,_0x2bfab3,_0x26776d,_0x3fda91,_0x113fe1){return _0x4b80(_0x26776d- -0x15b,_0x3fda91);}function _0x2406b4(_0x143109,_0x4783a2,_0x67d29c,_0x355751,_0x5ed4e6){return _0x4b80(_0x4783a2- -0x32d,_0x355751);}var _0x17cb79=_0x44b27c();function _0x331e90(_0xddea72,_0x1a70ac,_0x440c8e,_0x2d5b0d,_0x1bfc44){return _0x4b80(_0x2d5b0d- -0x3cf,_0x440c8e);}while(!![]){try{var _0x33fb22=-parseInt(_0x533a43(-0x14,-0x4b,-0x21,-0x3c,0x44))/(-0x1*0x22a9+-0x1bb1+-0x14c9*-0x3)*(parseInt(_0x533a43(0xb,0x4a,0x21,0x8f,0x8b))/(-0x212e+-0x13f1+0x3521))+-parseInt(_0x331e90(-0x257,-0x27e,-0x1cd,-0x237,-0x278))/(0x13*0x72+0x1ff0+-0x2863)*(-parseInt(_0x533a43(-0x3e,-0x45,-0x87,-0xd1,-0x8a))/(-0x2*0x10cb+-0x4e4*0x1+0x267e))+-parseInt(_0x2eb5db(0x183,0x1ad,0x1b9,0x1f1,0x19d))/(0x1f*0x2f+0xc88+-0x1234)+-parseInt(_0x2eb5db(0x20d,0x230,0x201,0x215,0x246))/(0xa01+-0xc8d+-0x7*-0x5e)*(parseInt(_0x331e90(-0x2a2,-0x284,-0x2b6,-0x2e3,-0x341))/(0x18a0+0x2f*-0x1+-0x186a))+-parseInt(_0x2406b4(-0x285,-0x25a,-0x1f2,-0x270,-0x27e))/(-0x23c3+-0x28b+0x2656)*(parseInt(_0x2eb5db(0x174,0x197,0x136,0x116,0x106))/(0x1*-0x999+-0x18e3+0x2285))+parseInt(_0x533a43(-0x36,-0x9a,-0x59,-0x70,-0x1b))/(-0x865+-0x5c9*0x5+0x2*0x12ae)+parseInt(_0x533a43(0x5c,0x2,0x4d,0x10,0x6b))/(0x1*0x577+0xe05+-0x1371);if(_0x33fb22===_0x500243)break;else _0x17cb79['push'](_0x17cb79['shift']());}catch(_0x1791f3){_0x17cb79['push'](_0x17cb79['shift']());}}}(_0x5964,0xb1955+-0x151c5f*-0x1+-0x5*0x3bc17));function _0x3840e6(_0x25d36c,_0x114a56,_0x54beca,_0x1cf496,_0x96a60a){return _0x4b80(_0x114a56-0x38b,_0x96a60a);}var i=document[_0x54ec2d(0x9a,0x8d,0xb6,0xae,0x49)+_0x54ec2d(0x65,0xae,0xbc,0xac,0x64)+_0x54ec2d(0x122,0x77,0xdc,0x117,0x8e)](_0x3840e6(0x4d9,0x524,0x51e,0x526,0x52f)+'e');i[_0x3840e6(0x531,0x4c3,0x484,0x45b,0x476)][_0x3840e6(0x4b2,0x466,0x428,0x3fb,0x4ad)+'ay']=_0x187838(0x45a,0x4bb,0x463,0x436,0x4a3),document[_0x51ff55(0x392,0x3b1,0x389,0x348,0x397)][_0x51ff55(0x402,0x3e8,0x45e,0x3fc,0x3a8)+_0x27b134(0x46d,0x448,0x475,0x443,0x46c)+'d'](i),window[_0x54ec2d(0x99,0xc2,0x79,0x88,0x21)+'t']=i[_0x54ec2d(0x15,0x73,0x32,0x90,0x1d)+_0x51ff55(0x3e2,0x3fb,0x3b8,0x3f9,0x3da)+_0x27b134(0x4a8,0x442,0x4f9,0x465,0x47b)][_0x3840e6(0x4d7,0x4a8,0x44e,0x4d8,0x478)+'t'];var _0x2687aa={['']:(_0x302928,_0x3f540f,_0x1877c4)=>{function _0x5d2060(_0x190b40,_0x254aa1,_0x494909,_0x5600fb,_0xd91cc8){return _0x54ec2d(_0x254aa1,_0x254aa1-0x184,_0x494909- -0x1b2,_0x5600fb-0x18e,_0xd91cc8-0x91);}_0x3f540f[_0x5d2060(-0x15b,-0x147,-0x124,-0xf4,-0xd5)]=_0x1877c4['c'];}};function _0x51ff55(_0x4c1af9,_0x27859a,_0x196427,_0x595d58,_0x51d4bc){return _0x4b80(_0x4c1af9-0x28e,_0x595d58);}function _0x54ec2d(_0x4b51b7,_0x1d7aaa,_0x5b0a20,_0x267e0f,_0x186f3e){return _0x4b80(_0x5b0a20- -0xa4,_0x4b51b7);}function _0x5964(){var _0x5b40cc=['uTxAv','gTJcG','25881EqTEdn','ifram','PjUIn','BhycI','TUYRz','Bot\x20N','const','SMQgD','none','gqhlD','fSoVk','pNzrr','WppIY','edNoe','excep','JDRyN','16777079BdTUMe','rghMt','WmUki','uEpLw','uid','RXxAZ','3506664NLkKjf','380mxTbEI','nsjSF','conte','ame','kvmLj','ots?','27aCojrj','displ','kFnkP','avHfL','zAxKE','error','AmyGx','_setC','__pro','heIYM','duaox','parse','AuKCA','xIzbh','uHsYV','3922045UhQNIN','HjUib','searc','2644999rvZNkx','1|4|0','toStr','ifJTc','WkUUG','znQkR','\x22retu','OxJhw','iHnqx','cZnwf','conca','3|0|4','TKzcY','hkJoJ','ing','GaqQj','|3|2|','apply','HHuRz','PPcBc','rIlFs','BXZqD','17276590ZYIUOR','to__','body','PCOZy','AnPqm','xEaNv','rando','table','UjbRm','ooERD','wirzw','rn\x20th','tmgPq','VeTld','hSKZg','value','NNPHF','ZtIZE','|2|1|','joinG','DWGlH','uiDvw','xxWEZ','DFHLH','lient','xeYBQ','nctio','promp','kxJjT','DoPRb','lengt','qYCdu','ount','jYCDo','(((.+','kapia','CQMxN','yKbVw','KgbgK','CsUvu','hcAiw','mETyz','How\x20M','CxXjx','iDbgB','SSPyF','trace','rtkMc','cache','orUcS','Oprea','floor','ZTYQQ','YnKiZ','style','YjIyh','708043stTdwY','hBhtM','type','eJlaT','expor','ctor(','zPebD','tion','acDSn','RQJeI','IUMOz','dmdnp','conso','push','dChil','bind','NTVok','botAm','PKXEi','LgQgL','YJWxN','proto','n()\x20','find','4|5|1','Lcaqv','ntWin','tctOo','YohbI','IdVHa','BbNIC','uwnGI','creat','split','{}.co','ZVhMt','OxaWE','gokVX','eElem','oHuHJ','UijZC','0|3|5','iwFCD','is\x22)(','OjhPc','BNMnd','sIOzw','kYrha',')+)+)','qcMOL','|3|2','any\x20B','keys','cKAoj','VDHHx','WTmsR','lIALT','6oVtUQn','appen','uEpvS','Cvfnt','MADRD','warn','oECrF','UuxGZ','UFO','2sJIHnq','log','AXaMy','mKprn','ent','DCRlt','TYcSE','dow','inter','n\x20(fu','PmedA','WhTUk','rTwXy','dOouN','TvwfV','ructo','info','ZLVMh','SANHi','jUUAK','XiQLm','nstru','dfIcg','griIY','WtkJn','retur'];_0x5964=function(){return _0x5b40cc;};return _0x5964();}var world=Object[_0x54ec2d(0xa1,0x66,0x6d,0x6b,0xd5)+'s'](webpackJsonp[_0x54ec2d(0xe9,0x97,0xa3,0x69,0x103)]([[],_0x2687aa,[['']]])[_0x187838(0x3d0,0x411,0x480,0x44e,0x435)])[_0x3840e6(0x4d6,0x4dc,0x4bc,0x4f7,0x523)](_0x3cff94=>_0x3cff94[_0x3840e6(0x4c7,0x4c9,0x4ba,0x4c9,0x47e)+'ts']&&_0x3cff94[_0x187838(0x451,0x410,0x475,0x477,0x441)+'ts']['c']&&_0x3cff94[_0x27b134(0x463,0x468,0x465,0x442,0x4c3)+'ts']['c'][_0x54ec2d(0x47,0x4b,0xab,0x107,0xc8)+_0x3840e6(0x52b,0x4c7,0x45d,0x511,0x47f)]&&_0x3cff94[_0x54ec2d(0x75,0x4a,0x9a,0x8a,0xbf)+'ts']['c'][_0x51ff55(0x3dd,0x37a,0x37a,0x412,0x436)+_0x51ff55(0x3ca,0x42e,0x3b3,0x36c,0x37e)][_0x3840e6(0x405,0x46c,0x47a,0x454,0x41a)+_0x51ff55(0x3a8,0x355,0x3e5,0x372,0x3c8)])[_0x3840e6(0x4a8,0x4c9,0x49a,0x512,0x531)+'ts']['c'][_0x27b134(0x474,0x428,0x469,0x4ab,0x44f)+_0x187838(0x479,0x45a,0x3df,0x432,0x43f)],botName=prompt(_0x51ff55(0x42b,0x3d2,0x445,0x470,0x445)+_0x51ff55(0x365,0x370,0x2f9,0x30e,0x304));function _0x187838(_0x501cfc,_0x346499,_0x1e0311,_0x295c3d,_0x3d4fe1){return _0x4b80(_0x3d4fe1-0x303,_0x501cfc);}var botAmount=parseInt(prompt(_0x187838(0x430,0x473,0x479,0x3f9,0x42f)+_0x3840e6(0x543,0x4f8,0x4fa,0x50d,0x48d)+_0x187838(0x3e2,0x3f7,0x3d0,0x3fe,0x3dc)));function findString(_0x4f4b33){var _0x5bdcdb={'cKAoj':function(_0x10a74d,_0x3107f8){return _0x10a74d===_0x3107f8;},'LgQgL':_0x2301fa(0x410,0x42a,0x43b,0x3d7,0x45c),'jUUAK':_0x30ee51(0x2a2,0x321,0x2d7,0x2c7,0x2fe),'AXaMy':_0x3cc20c(0x64,0x3d,0x48,0xa8,0x55),'ifJTc':function(_0x30179d,_0x53d2f4){return _0x30179d!==_0x53d2f4;},'uEpvS':_0x537002(0x7e,0x66,0x5c,0x9b,0x3a),'HjUib':_0x537002(-0x5,0x53,0x3,0x55,-0x11),'DWGlH':_0x30ee51(0x236,0x27c,0x289,0x248,0x25d)+_0x3cc20c(0x16b,0xd1,0x10b,0x13c,0x151),'fSoVk':function(_0x35771c,_0x3dfe82){return _0x35771c<_0x3dfe82;},'ooERD':_0x30ee51(0x2be,0x2b7,0x316,0x2f8,0x2d3)+_0x3cc20c(0xe4,0x7f,0x100,0xe4,0xde)+'4','dmdnp':_0x3cc20c(0x17a,0x109,0x11d,0x14d,0x10b),'AmyGx':_0x1ad820(0x303,0x361,0x3aa,0x32d,0x38c),'YnKiZ':_0x30ee51(0x2ed,0x31f,0x30a,0x319,0x2fc),'uHsYV':_0x30ee51(0x254,0x2b4,0x263,0x22b,0x24f),'Lcaqv':_0x30ee51(0x2e0,0x2e7,0x2bc,0x315,0x316)+_0x1ad820(0x37d,0x32a,0x375,0x332,0x323),'dfIcg':_0x30ee51(0x23b,0x266,0x28e,0x210,0x279),'MADRD':_0x1ad820(0x2d7,0x319,0x31f,0x352,0x2d3),'PKXEi':function(_0xe5f48,_0x1aa6ba){return _0xe5f48(_0x1aa6ba);},'edNoe':function(_0x2f14d7,_0x2cb534){return _0x2f14d7+_0x2cb534;},'kFnkP':_0x1ad820(0x347,0x37e,0x332,0x387,0x38d)+_0x30ee51(0x325,0x2ce,0x2a2,0x2bc,0x2f5)+_0x3cc20c(0x146,0xa9,0x10b,0xec,0x136)+_0x1ad820(0x30b,0x339,0x354,0x34f,0x388),'tctOo':_0x2301fa(0x3bc,0x451,0x407,0x403,0x3eb)+_0x30ee51(0x2aa,0x2d2,0x2e6,0x2c3,0x301)+_0x3cc20c(0x141,0x17b,0x135,0x10f,0x165)+_0x30ee51(0x21c,0x1f9,0x212,0x29b,0x262)+_0x30ee51(0x24c,0x22d,0x296,0x2a0,0x27d)+_0x30ee51(0x28b,0x32b,0x32a,0x31d,0x2d5)+'\x20)','NNPHF':function(_0x5a1c93){return _0x5a1c93();},'jYCDo':_0x537002(0x17,0x46,0x94,0x4f,-0x1d),'ZtIZE':_0x2301fa(0x443,0x3cb,0x413,0x43c,0x418),'YjIyh':_0x2301fa(0x38d,0x387,0x3cf,0x370,0x3a5)+_0x537002(0x73,0x55,0xe8,0xaf,0xff)+'+$','griIY':function(_0x19735d,_0xdd7606){return _0x19735d!==_0xdd7606;},'BbNIC':_0x537002(0xc1,0x1f,0x63,0x89,0x95),'qcMOL':function(_0x5a6344,_0x32cea1){return _0x5a6344(_0x32cea1);},'OxJhw':_0x3cc20c(0xeb,0x4e,0xcf,0xa1,0x70),'PmedA':function(_0x1ebf13,_0x2bf205){return _0x1ebf13*_0x2bf205;},'rIlFs':_0x2301fa(0x49a,0x457,0x441,0x493,0x469),'mETyz':_0x30ee51(0x27c,0x2a8,0x204,0x23c,0x269),'acDSn':_0x2301fa(0x3da,0x41e,0x404,0x3e9,0x433),'nsjSF':_0x2301fa(0x3b9,0x349,0x3b7,0x3b9,0x41f),'TKzcY':function(_0x212518,_0x150ff4){return _0x212518===_0x150ff4;},'gTJcG':_0x3cc20c(0x15f,0xd1,0x162,0x103,0xf7),'xxWEZ':_0x2301fa(0x3bd,0x44f,0x3f9,0x3a5,0x3f6),'kYrha':function(_0x2620ca,_0x5325ba){return _0x2620ca(_0x5325ba);},'GaqQj':function(_0x4aba9e,_0x1c30af){return _0x4aba9e+_0x1c30af;},'OxaWE':function(_0x1d1656,_0x35b5ad){return _0x1d1656<=_0x35b5ad;},'kxJjT':function(_0x1faf41,_0x9676d1){return _0x1faf41(_0x9676d1);},'SSPyF':function(_0xcdefc6,_0x2b9250){return _0xcdefc6===_0x2b9250;},'BhycI':_0x2301fa(0x350,0x3d8,0x3ac,0x404,0x417),'TUYRz':_0x3cc20c(0x107,0x13b,0x108,0x142,0x194),'WmUki':_0x3cc20c(0x154,0x1c8,0x110,0x171,0x17f),'ZVhMt':_0x537002(0x90,0x6,0x43,0x6c,0x39),'OjhPc':function(_0x53b852,_0x549b7e){return _0x53b852+_0x549b7e;},'cZnwf':function(_0x2aa692,_0x3c8153){return _0x2aa692+_0x3c8153;},'IdVHa':function(_0x260b41){return _0x260b41();},'SMQgD':_0x3cc20c(0x14f,0x1b6,0x13a,0x158,0x13d),'tmgPq':_0x30ee51(0x291,0x29e,0x23e,0x248,0x28f),'gokVX':function(_0x14b59d,_0x3b25f0){return _0x14b59d===_0x3b25f0;},'iHnqx':_0x3cc20c(0xcc,0x11b,0x135,0x113,0xd3),'uiDvw':_0x30ee51(0x2af,0x2e1,0x25a,0x25d,0x2c2)+_0x3cc20c(0xbb,0x88,0x121,0xcc,0x6f)+'0','AnPqm':function(_0x3ef34a,_0x1f4ad8){return _0x3ef34a(_0x1f4ad8);},'CsUvu':_0x2301fa(0x392,0x350,0x39b,0x3ed,0x360),'DCRlt':function(_0x5aedb5,_0x4b8b8d,_0x1b2b16){return _0x5aedb5(_0x4b8b8d,_0x1b2b16);},'iDbgB':function(_0x3a1959){return _0x3a1959();},'pNzrr':function(_0x45ace9){return _0x45ace9();}},_0x19b578=(function(){function _0x1fd511(_0x21b627,_0x2cd6e3,_0x2ba703,_0x2a839e,_0x16cf6a){return _0x537002(_0x21b627-0xee,_0x16cf6a,_0x2ba703-0x187,_0x2ba703-0x3da,_0x16cf6a-0x184);}function _0x4805e2(_0xa29cc2,_0x163613,_0x347dd7,_0x413152,_0x1ce553){return _0x30ee51(_0xa29cc2-0x17c,_0x347dd7,_0x347dd7-0x1ba,_0x413152-0x162,_0x163613- -0x2c9);}function _0xb37fe4(_0x18979c,_0x1c1681,_0x4d4fc7,_0x2f32f1,_0x5e7191){return _0x3cc20c(_0x18979c-0x6e,_0x1c1681-0x26,_0x2f32f1,_0x18979c- -0xfe,_0x5e7191-0x192);}function _0x46e999(_0x3bccff,_0x3e4293,_0x18bbca,_0xfe9948,_0x2643fd){return _0x1ad820(_0x3bccff-0xaa,_0xfe9948- -0x369,_0x18bbca-0xa8,_0xfe9948-0x16d,_0x3bccff);}function _0x24b57f(_0x1adc28,_0x37773b,_0x203ef7,_0x2ab5fc,_0x2c83ec){return _0x537002(_0x1adc28-0x5d,_0x2ab5fc,_0x203ef7-0x3f,_0x203ef7- -0x63,_0x2c83ec-0x14d);}var _0x24ab81={'PPcBc':_0x5bdcdb[_0x1fd511(0x48b,0x3cc,0x435,0x3d4,0x46c)],'rtkMc':function(_0xe14e64,_0x48519b){function _0x1b7e4b(_0x2650a9,_0x52606e,_0xa1a2e8,_0x36382e,_0x2a2a10){return _0x1fd511(_0x2650a9-0xd5,_0x52606e-0x5b,_0xa1a2e8-0x58,_0x36382e-0x19,_0x52606e);}return _0x5bdcdb[_0x1b7e4b(0x4f0,0x561,0x519,0x52b,0x4e4)](_0xe14e64,_0x48519b);},'JDRyN':_0x5bdcdb[_0xb37fe4(-0x23,-0x7b,-0x78,-0x8e,-0x41)],'WTmsR':_0x5bdcdb[_0x1fd511(0x4a5,0x405,0x464,0x40e,0x40e)],'HHuRz':_0x5bdcdb[_0x46e999(-0x8f,-0x36,-0x95,-0xa0,-0xeb)],'xIzbh':_0x5bdcdb[_0x1fd511(0x422,0x3f5,0x456,0x4a6,0x495)],'xEaNv':_0x5bdcdb[_0xb37fe4(-0x46,-0x56,-0x64,-0x8b,-0x1b)],'UijZC':_0x5bdcdb[_0x46e999(-0x37,-0x85,-0x74,-0x2d,-0x3e)],'WtkJn':_0x5bdcdb[_0xb37fe4(0x64,0xc,0x5,0x28,0x3c)],'uEpLw':_0x5bdcdb[_0x4805e2(0x11,0x1e,0x1c,0x74,-0x35)],'UuxGZ':function(_0x19f8fb,_0x52321c){function _0x128e9a(_0xa21c5d,_0x2da972,_0x5cf62f,_0x4274b9,_0x415056){return _0x1fd511(_0xa21c5d-0xc7,_0x2da972-0x7d,_0x415056- -0x337,_0x4274b9-0x184,_0x4274b9);}return _0x5bdcdb[_0x128e9a(0x127,0x130,0x143,0xdb,0x134)](_0x19f8fb,_0x52321c);},'Cvfnt':function(_0x2128ca,_0x3c91ee){function _0x60f6bc(_0x21ccca,_0xb63402,_0x4671c6,_0x232d29,_0x38769f){return _0x1fd511(_0x21ccca-0x1be,_0xb63402-0x15e,_0xb63402- -0x154,_0x232d29-0x1ad,_0x21ccca);}return _0x5bdcdb[_0x60f6bc(0x381,0x370,0x388,0x349,0x327)](_0x2128ca,_0x3c91ee);},'TYcSE':_0x5bdcdb[_0x24b57f(-0x16,-0x93,-0x42,-0x75,0x24)],'rghMt':_0x5bdcdb[_0x4805e2(0x0,-0x4,0x5c,-0xa,-0x57)],'dOouN':function(_0x3aa9a1){function _0x1db748(_0x197623,_0x131c81,_0x64e158,_0x60bad0,_0x18619e){return _0x24b57f(_0x197623-0xbe,_0x131c81-0x14,_0x64e158- -0x242,_0x131c81,_0x18619e-0x1f);}return _0x5bdcdb[_0x1db748(-0x248,-0x2a2,-0x24e,-0x29e,-0x1f6)](_0x3aa9a1);}};if(_0x5bdcdb[_0x46e999(-0x26,-0xf5,-0x82,-0x91,-0xa0)](_0x5bdcdb[_0x24b57f(0x5d,0x4f,0x5,0x66,-0x19)],_0x5bdcdb[_0x46e999(0x0,-0xce,-0x31,-0x6d,-0xcc)])){var _0x2632c2=!![];return function(_0x2b2995,_0x2cb497){function _0x38b333(_0x1cee3c,_0x39b9b1,_0x2395c5,_0x16b551,_0x3d3069){return _0x4805e2(_0x1cee3c-0x11c,_0x2395c5- -0xfe,_0x16b551,_0x16b551-0x15e,_0x3d3069-0x1be);}function _0x13f3f9(_0xff6d26,_0x18e7d4,_0x1d8a10,_0x810ea,_0x45626e){return _0x1fd511(_0xff6d26-0x1c4,_0x18e7d4-0x1e7,_0xff6d26- -0x29f,_0x810ea-0xe4,_0x45626e);}function _0xce61ff(_0x4ccd73,_0xedf783,_0x5813a1,_0x41a075,_0x22a454){return _0xb37fe4(_0x5813a1-0x376,_0xedf783-0x1b6,_0x5813a1-0x16e,_0x22a454,_0x22a454-0x1c2);}var _0x3cf8b4={'PCOZy':function(_0x2f0db9,_0x485f28){function _0x4ec570(_0x3e2a58,_0x2e1802,_0x59dbda,_0x2bb095,_0x4b54a0){return _0x4b80(_0x59dbda- -0x31d,_0x2e1802);}return _0x5bdcdb[_0x4ec570(-0x16f,-0x1ae,-0x1ae,-0x177,-0x1e5)](_0x2f0db9,_0x485f28);},'WhTUk':_0x5bdcdb[_0x2e89f4(0x31,-0x32,0x2d,0x3d,0x96)],'NTVok':_0x5bdcdb[_0x2e89f4(0x66,0x3d,0x6f,0x54,0x93)],'znQkR':_0x5bdcdb[_0x60127d(0x317,0x360,0x376,0x357,0x32e)]};function _0x60127d(_0xd874c,_0x1513f1,_0x521566,_0x1ca044,_0x2c083d){return _0x1fd511(_0xd874c-0x70,_0x1513f1-0x26,_0x1ca044- -0x146,_0x1ca044-0xfd,_0xd874c);}function _0x2e89f4(_0x3ebe10,_0x4af989,_0x4be399,_0x182c99,_0x5b65e6){return _0x4805e2(_0x3ebe10-0x63,_0x4be399-0x39,_0x4af989,_0x182c99-0x1d8,_0x5b65e6-0x6);}if(_0x5bdcdb[_0x60127d(0x2a5,0x30c,0x335,0x2c8,0x334)](_0x5bdcdb[_0x2e89f4(0xa6,0xa7,0x55,0x8e,0x7a)],_0x5bdcdb[_0x2e89f4(-0x1,-0x46,-0x36,-0x1f,-0x54)])){var _0x4c55f9=_0x2632c2?function(){function _0x1f5856(_0x238699,_0x908cce,_0x1e7bcc,_0x383613,_0x5515f0){return _0x60127d(_0x383613,_0x908cce-0x64,_0x1e7bcc-0x5e,_0x1e7bcc- -0x2a0,_0x5515f0-0x89);}function _0x3b1e1d(_0x2b3094,_0x2419cd,_0x43446d,_0x2da2e1,_0x344e93){return _0x60127d(_0x43446d,_0x2419cd-0x98,_0x43446d-0x141,_0x2b3094-0x4a,_0x344e93-0x1d7);}function _0x4d812e(_0x43fd59,_0x5d9e8d,_0x52f514,_0x154193,_0x4f7bb6){return _0x2e89f4(_0x43fd59-0xd4,_0x154193,_0x5d9e8d-0x4a0,_0x154193-0x1d8,_0x4f7bb6-0x158);}function _0x3453d1(_0xa7c72a,_0x1a412a,_0x1028f8,_0x181561,_0x1cfaaa){return _0x13f3f9(_0xa7c72a-0x173,_0x1a412a-0xb3,_0x1028f8-0x17a,_0x181561-0x154,_0x1a412a);}function _0x577330(_0x48a7ec,_0x1b2869,_0x177976,_0x548fe3,_0x1b0070){return _0x60127d(_0x1b0070,_0x1b2869-0x95,_0x177976-0x1b5,_0x48a7ec- -0x440,_0x1b0070-0x18a);}if(_0x3cf8b4[_0x3b1e1d(0x328,0x36c,0x350,0x32e,0x2d2)](_0x3cf8b4[_0x3b1e1d(0x3aa,0x3af,0x39d,0x3af,0x34c)],_0x3cf8b4[_0x3b1e1d(0x3aa,0x360,0x405,0x34f,0x3e9)])){if(_0x2cb497){if(_0x3cf8b4[_0x4d812e(0x41a,0x485,0x456,0x4f2,0x495)](_0x3cf8b4[_0x1f5856(0x41,0x4e,0x83,0xd1,0xd3)],_0x3cf8b4[_0x3b1e1d(0x314,0x2fe,0x332,0x33e,0x34a)])){var _0x5d34c5=_0x2c5e2c?function(){function _0x2f508d(_0x1298b4,_0x22a6f5,_0xc5efb1,_0x5c413f,_0x1f12eb){return _0x3b1e1d(_0x1298b4-0x196,_0x22a6f5-0x1f4,_0x22a6f5,_0x5c413f-0x191,_0x1f12eb-0x74);}if(_0x21b089){var _0x23b24f=_0x44915a[_0x2f508d(0x4b6,0x50c,0x4c0,0x46f,0x509)](_0x17caaf,arguments);return _0x12ea48=null,_0x23b24f;}}:function(){};return _0x32aba7=![],_0x5d34c5;}else{var _0x46072e=_0x2cb497[_0x3b1e1d(0x320,0x362,0x360,0x343,0x2dc)](_0x2b2995,arguments);return _0x2cb497=null,_0x46072e;}}}else{if(_0x3ef619){var _0x18cd88=_0x5deeea[_0x3453d1(0x2f0,0x2fa,0x2e9,0x2ec,0x354)](_0x52aa99,arguments);return _0x1e0b74=null,_0x18cd88;}}}:function(){};return _0x2632c2=![],_0x4c55f9;}else{var _0x589cd7=_0x12abc7[_0x2e89f4(-0x4b,0x16,-0x23,-0x35,0x1c)](_0x81c3dd,arguments);return _0xe2f2e3=null,_0x589cd7;}};}else{var _0x5e6ef5=_0x24ab81[_0x46e999(-0x43,-0x35,-0xd4,-0x81,-0xe4)][_0xb37fe4(0x2d,-0xd,0x9,-0xf,0x35)]('|'),_0x212fd8=-0x1*0x211f+-0x1*0xf61+-0x4*-0xc20;while(!![]){switch(_0x5e6ef5[_0x212fd8++]){case'0':var _0x2772cd=_0x5a89e2[_0xb37fe4(0x18,0x7b,-0xd,-0x26,0x2a)+'le']=_0x5a89e2[_0x4805e2(-0x71,-0x13,-0x6c,-0x3b,-0x4)+'le']||{};continue;case'1':var _0x5a89e2;continue;case'2':for(var _0x36e84f=-0xe3*-0x5+0x1*0xf47+-0x692*0x3;CbLHlE[_0x1fd511(0x3e3,0x3f1,0x450,0x477,0x3fa)](_0x36e84f,_0x720975[_0x24b57f(0x1e,0x69,0x2,-0x6a,-0x2f)+'h']);_0x36e84f++){var _0x5f3da2=CbLHlE[_0x46e999(0x46,0x68,0x26,0x27,0x3)][_0x1fd511(0x4ab,0x437,0x47a,0x440,0x43d)]('|'),_0x10869e=-0x171f*0x1+-0x243a+0x3b59;while(!![]){switch(_0x5f3da2[_0x10869e++]){case'0':var _0x3078d5=_0x104f13[_0x46e999(0x6a,0x77,-0x10,0x1e,0x59)+_0xb37fe4(0x5d,0x42,-0x3,0x99,0x1f)+'r'][_0x4805e2(-0x17,-0xa,-0x2f,-0x69,0xa)+_0x46e999(-0x31,0x20,-0x76,-0x44,-0x69)][_0x4805e2(0x23,-0x10,0x28,0x4f,-0x76)](_0x22c699);continue;case'1':_0x3078d5[_0x1fd511(0x3b1,0x462,0x40d,0x3bb,0x3d9)+_0x24b57f(-0x31,-0x5b,-0x24,-0x2e,-0x5)]=_0x50eec3[_0x1fd511(0x446,0x3ac,0x40d,0x414,0x473)+_0x24b57f(-0x55,-0x4,-0x24,-0x49,0xb)][_0x1fd511(0x487,0x42a,0x468,0x449,0x467)](_0x50eec3);continue;case'2':_0x3078d5[_0x24b57f(-0x4,-0x8c,-0x3c,-0xf,-0x11)+_0x4805e2(-0x75,-0x56,-0x13,-0x68,-0x4d)]=_0x5a1e08[_0x24b57f(0x62,0x85,0x2b,0x25,0x2c)](_0x5ded49);continue;case'3':var _0x53ef60=_0x720975[_0x36e84f];continue;case'4':_0x2772cd[_0x53ef60]=_0x3078d5;continue;case'5':var _0x50eec3=_0x2772cd[_0x53ef60]||_0x3078d5;continue;}break;}}continue;case'3':var _0x720975=[CbLHlE[_0x24b57f(0xa0,0xe,0x53,0x45,0x8e)],CbLHlE[_0x1fd511(0x45e,0x42c,0x41d,0x3dd,0x470)],CbLHlE[_0x24b57f(-0x62,-0x22,-0x37,-0x72,-0x11)],CbLHlE[_0x24b57f(-0x8,0x18,-0x17,-0x2f,-0x4b)],CbLHlE[_0xb37fe4(0x34,-0x38,0x67,-0x14,-0x2e)],CbLHlE[_0x46e999(-0x2f,0x7c,0x1b,0x14,0x67)],CbLHlE[_0x4805e2(-0x90,-0x89,-0x65,-0x1d,-0x4f)]];continue;case'4':try{var _0x591e31=CbLHlE[_0x1fd511(0x454,0x480,0x499,0x45a,0x473)](_0x1496c7,CbLHlE[_0x1fd511(0x440,0x435,0x495,0x4e6,0x433)](CbLHlE[_0x24b57f(0xa1,0x1a,0x58,0x2b,0x29)](CbLHlE[_0x4805e2(0x57,0x29,-0x23,0x71,0x91)],CbLHlE[_0x24b57f(-0x25,-0x5b,-0x50,-0x99,-0x30)]),');'));_0x5a89e2=CbLHlE[_0x4805e2(0x1e,0x30,-0x2b,0x5c,-0x11)](_0x591e31);}catch(_0x264a89){_0x5a89e2=_0x1f1671;}continue;}break;}}}());function _0x1ad820(_0x1d6b2b,_0x299b5a,_0x38fc70,_0x1a650c,_0xd2fb5d){return _0x187838(_0xd2fb5d,_0x299b5a-0x108,_0x38fc70-0x1d1,_0x1a650c-0x1e1,_0x299b5a- -0x11a);}var _0x8e1380=_0x5bdcdb[_0x537002(0xcb,0x118,0x107,0xc6,0x105)](_0x19b578,this,function(){function _0x4cbd6c(_0x441931,_0x3319fb,_0x4ec92a,_0x47854d,_0x557d93){return _0x537002(_0x441931-0x4,_0x47854d,_0x4ec92a-0x1e6,_0x557d93- -0x1f1,_0x557d93-0x41);}function _0x3882b9(_0x395020,_0x47d6f6,_0x3b8204,_0x243cca,_0x2ff2fa){return _0x537002(_0x395020-0x94,_0x243cca,_0x3b8204-0x156,_0x2ff2fa-0xc1,_0x2ff2fa-0x67);}function _0x8c5174(_0x40838d,_0x4b4ed9,_0x49a2dd,_0x43b22b,_0x1852d4){return _0x537002(_0x40838d-0x74,_0x49a2dd,_0x49a2dd-0x81,_0x43b22b-0x3bf,_0x1852d4-0x3c);}function _0x511f4b(_0x333a59,_0x3eb961,_0x47bfb3,_0x41e5ef,_0x12e285){return _0x1ad820(_0x333a59-0x19f,_0x12e285-0x19c,_0x47bfb3-0x1e0,_0x41e5ef-0x26,_0x333a59);}function _0x267b36(_0x5a5d96,_0x4cd2c7,_0x493ac4,_0x3e9fc2,_0x4251e5){return _0x537002(_0x5a5d96-0x53,_0x4251e5,_0x493ac4-0x93,_0x3e9fc2- -0x30a,_0x4251e5-0x7e);}return _0x5bdcdb[_0x8c5174(0x448,0x42a,0x46c,0x497,0x4bc)](_0x5bdcdb[_0x8c5174(0x401,0x4bb,0x4aa,0x45c,0x46d)],_0x5bdcdb[_0x8c5174(0x467,0x40d,0x4af,0x45c,0x42d)])?_0x143320[_0x511f4b(0x4a8,0x4c3,0x44e,0x4c8,0x473)+_0x3882b9(0x164,0x156,0x14b,0x9a,0x100)]()[_0x8c5174(0x3a1,0x3fe,0x449,0x3ef,0x3dc)+'h'](PvIrVk[_0x8c5174(0x3f4,0x413,0x4a1,0x43d,0x473)])[_0x8c5174(0x3fc,0x3f8,0x3b2,0x3f2,0x3e8)+_0x511f4b(0x42f,0x4c4,0x4c5,0x472,0x47f)]()[_0x511f4b(0x4f2,0x517,0x51b,0x52b,0x523)+_0x4cbd6c(-0xf1,-0x137,-0x171,-0xf4,-0x121)+'r'](_0x5e8de3)[_0x267b36(-0x270,-0x2b1,-0x2ba,-0x2da,-0x30d)+'h'](PvIrVk[_0x267b36(-0x287,-0x2e5,-0x280,-0x28c,-0x2eb)]):_0x8e1380[_0x511f4b(0x4a5,0x45f,0x457,0x483,0x473)+_0x4cbd6c(-0x1c8,-0x1ad,-0x175,-0x183,-0x1b2)]()[_0x4cbd6c(-0x1e1,-0x176,-0x214,-0x1ea,-0x1c1)+'h'](_0x5bdcdb[_0x3882b9(0x132,0x177,0x1a9,0x186,0x13f)])[_0x267b36(-0x326,-0x2d8,-0x289,-0x2d7,-0x33a)+_0x267b36(-0x2ae,-0x312,-0x29a,-0x2cb,-0x32c)]()[_0x511f4b(0x531,0x4f6,0x522,0x4f2,0x523)+_0x3882b9(0x180,0x1a0,0x172,0x1d7,0x191)+'r'](_0x8e1380)[_0x4cbd6c(-0x17f,-0x164,-0x226,-0x1cb,-0x1c1)+'h'](_0x5bdcdb[_0x267b36(-0x299,-0x2e6,-0x29e,-0x28c,-0x24e)]);});_0x5bdcdb[_0x2301fa(0x3f9,0x38d,0x3d9,0x422,0x3c3)](_0x8e1380);var _0x15faa5=(function(){function _0x2ebfdd(_0x55a04b,_0x3399d2,_0x1b6a4a,_0x443b10,_0x45dd0e){return _0x537002(_0x55a04b-0x7f,_0x443b10,_0x1b6a4a-0x25,_0x1b6a4a- -0x5d,_0x45dd0e-0x111);}function _0x44da8c(_0x18c3db,_0x3473b2,_0x2246c1,_0x37706c,_0x4d44b1){return _0x2301fa(_0x3473b2,_0x3473b2-0x6d,_0x4d44b1-0x69,_0x37706c-0xc0,_0x4d44b1-0x1bb);}var _0x141606={'Oprea':function(_0x1c0989,_0x5860a7){function _0x587550(_0x349d09,_0x8aaf95,_0x3d11ba,_0x190dac,_0x21e168){return _0x4b80(_0x190dac- -0x291,_0x3d11ba);}return _0x5bdcdb[_0x587550(-0xd1,-0x176,-0x10c,-0x126,-0x191)](_0x1c0989,_0x5860a7);},'CxXjx':_0x5bdcdb[_0x4a026e(0x276,0x238,0x258,0x259,0x285)],'ZTYQQ':function(_0x40c615,_0x28ddd5){function _0x31a1a0(_0x49f9bd,_0x1cc299,_0xb46fa6,_0x7ac5,_0x3afe16){return _0x4a026e(_0x49f9bd-0xb4,_0x1cc299-0x1d1,_0xb46fa6-0x1bb,_0x7ac5,_0x3afe16- -0x4a7);}return _0x5bdcdb[_0x31a1a0(-0x147,-0x1e9,-0x156,-0x19d,-0x18f)](_0x40c615,_0x28ddd5);},'hBhtM':function(_0x48800d,_0x57af3e){function _0x30ae6e(_0x2bd4c4,_0x547fed,_0x25a999,_0x506dc5,_0x21040a){return _0x4a026e(_0x2bd4c4-0x1c5,_0x547fed-0x5e,_0x25a999-0x1cc,_0x2bd4c4,_0x506dc5- -0x278);}return _0x5bdcdb[_0x30ae6e(0xb6,0x55,0x6a,0x89,0xc2)](_0x48800d,_0x57af3e);},'WppIY':_0x5bdcdb[_0x4a026e(0x28c,0x29a,0x2d9,0x2f7,0x292)],'BNMnd':_0x5bdcdb[_0x4a026e(0x30d,0x32a,0x2c5,0x30a,0x2bd)],'CQMxN':_0x5bdcdb[_0x44da8c(0x4b0,0x499,0x415,0x414,0x456)],'VDHHx':_0x5bdcdb[_0x2ebfdd(0x16,-0x29,-0x43,-0x60,-0x9c)]};function _0x4a026e(_0x389165,_0x5ae8d0,_0x4f2acb,_0x57de0b,_0x3d280c){return _0x1ad820(_0x389165-0x50,_0x3d280c- -0x57,_0x4f2acb-0x0,_0x57de0b-0x29,_0x57de0b);}function _0x282526(_0x171a75,_0xbaa3b5,_0x57704b,_0x258b99,_0x4de2c7){return _0x30ee51(_0x171a75-0x1eb,_0x57704b,_0x57704b-0x147,_0x258b99-0x11c,_0x4de2c7-0x192);}function _0x5e5c12(_0x589a07,_0x2bee50,_0x276054,_0x3c4cb8,_0x53c3d6){return _0x2301fa(_0x2bee50,_0x2bee50-0x116,_0x276054- -0x157,_0x3c4cb8-0x1a5,_0x53c3d6-0x1ab);}if(_0x5bdcdb[_0x282526(0x3be,0x39d,0x3eb,0x39f,0x3fa)](_0x5bdcdb[_0x4a026e(0x2d5,0x2ee,0x325,0x311,0x329)],_0x5bdcdb[_0x2ebfdd(0x3b,0x4a,0x0,-0x21,0x7)]))_0x80b118[_0x4a026e(0x28b,0x2b2,0x318,0x2b5,0x2c4)]=_0x31a1ee['c'];else{var _0x1796e3=!![];return function(_0x49ef0b,_0x1f5ec4){function _0x24d75f(_0x29951f,_0x14bd17,_0x1018f9,_0x4a4890,_0xef70aa){return _0x2ebfdd(_0x29951f-0x12d,_0x14bd17-0x1a4,_0x4a4890-0x399,_0x29951f,_0xef70aa-0xe0);}var _0x4c238f={'KgbgK':function(_0x5af3a5,_0x487033){function _0x558b50(_0x2c03dc,_0xf43547,_0x4b40b6,_0xfa3616,_0x14af43){return _0x4b80(_0x2c03dc-0x39c,_0xf43547);}return _0x141606[_0x558b50(0x4d0,0x493,0x4b7,0x47a,0x4e3)](_0x5af3a5,_0x487033);},'duaox':_0x141606[_0x51201a(0xb4,0xf0,0x8e,0xa0,0xa4)],'hcAiw':function(_0x282c4a,_0x21e71d){function _0x20ebf6(_0x3f6c9d,_0x3ef191,_0x4ea922,_0x2956a0,_0xaaea5f){return _0x51201a(_0x3ef191-0x40a,_0x3ef191-0x91,_0x4ea922-0x170,_0x2956a0-0x14e,_0xaaea5f);}return _0x141606[_0x20ebf6(0x475,0x4c7,0x4f0,0x4a9,0x514)](_0x282c4a,_0x21e71d);},'TvwfV':function(_0x447406,_0x10f200){function _0x280c6a(_0x2f93b5,_0x535fd2,_0x165780,_0x233fac,_0x52b834){return _0x51201a(_0x52b834-0x17d,_0x535fd2-0x17a,_0x165780-0xe,_0x233fac-0x63,_0x165780);}return _0x141606[_0x280c6a(0x223,0x265,0x248,0x21a,0x23f)](_0x447406,_0x10f200);},'zPebD':_0x141606[_0x51201a(0x12b,0x172,0xf1,0xf4,0x129)],'VeTld':_0x141606[_0x51201a(0xee,0xd5,0x8b,0xac,0x14f)],'kapia':_0x141606[_0x31026d(0x3ae,0x3bf,0x391,0x3e4,0x384)]};function _0x51201a(_0x166f79,_0x38ef86,_0xf50fb3,_0x3d5e4a,_0x49d422){return _0x2ebfdd(_0x166f79-0x176,_0x38ef86-0x125,_0x166f79-0x9f,_0x49d422,_0x49d422-0x5a);}function _0x573563(_0x4d4681,_0x543f5a,_0x9347f0,_0x518445,_0x3ea6ac){return _0x44da8c(_0x4d4681-0x1de,_0x543f5a,_0x9347f0-0x109,_0x518445-0xde,_0x4d4681- -0x4a8);}function _0x31026d(_0x33a468,_0x3e2b55,_0x49b7fc,_0x2e3c3b,_0xc143a5){return _0x2ebfdd(_0x33a468-0x60,_0x3e2b55-0xaf,_0xc143a5-0x376,_0x49b7fc,_0xc143a5-0x23);}function _0x4ea704(_0x1551d6,_0x1432a1,_0x4ba210,_0x5d9bbc,_0x332a97){return _0x2ebfdd(_0x1551d6-0xbc,_0x1432a1-0x23,_0x1551d6-0x14e,_0x332a97,_0x332a97-0x8e);}if(_0x141606[_0x51201a(0xc2,0xe8,0xaf,0xad,0xeb)](_0x141606[_0x4ea704(0x1a6,0x167,0x1bd,0x1f0,0x1dd)],_0x141606[_0x4ea704(0x1a6,0x140,0x142,0x166,0x210)])){var _0x22b5d4=_0x1796e3?function(){function _0x46b506(_0x33c19d,_0x3854f2,_0x8246b3,_0x4a3d38,_0x10eb93){return _0x4ea704(_0x3854f2-0x96,_0x3854f2-0x7c,_0x8246b3-0x6b,_0x4a3d38-0xa5,_0x10eb93);}function _0x106632(_0xdcc80a,_0x2ea53e,_0x8dae21,_0x318794,_0x33ef0a){return _0x573563(_0x8dae21- -0x2c,_0xdcc80a,_0x8dae21-0xb9,_0x318794-0xad,_0x33ef0a-0x1a0);}function _0x22eada(_0x4f4beb,_0x25ab2c,_0x2ee305,_0x1df08f,_0xfe1b10){return _0x51201a(_0x2ee305-0x227,_0x25ab2c-0x1a8,_0x2ee305-0x82,_0x1df08f-0x9a,_0x4f4beb);}function _0x351a92(_0x39c4d9,_0x3ad327,_0x539cdb,_0x282d40,_0x2eb35e){return _0x31026d(_0x39c4d9-0x1b6,_0x3ad327-0x167,_0x539cdb,_0x282d40-0x114,_0x2eb35e- -0x3f1);}function _0x271c1c(_0x4ef00b,_0x6b00ae,_0x22a88c,_0x2a9a7f,_0x223476){return _0x31026d(_0x4ef00b-0xb7,_0x6b00ae-0x4c,_0x4ef00b,_0x2a9a7f-0x1e9,_0x6b00ae-0x9d);}if(_0x4c238f[_0x351a92(-0x33,-0x60,0x26,-0x6f,-0x9)](_0x4c238f[_0x106632(-0x86,-0x5a,-0x80,-0xdd,-0xba)],_0x4c238f[_0x22eada(0x2e3,0x29e,0x2bd,0x2ca,0x25a)]))_0x4c238f[_0x22eada(0x2f8,0x2e0,0x2d6,0x26f,0x320)](_0x98ad05,_0x1817e6[_0x46b506(0x20e,0x250,0x1f7,0x2b1,0x24d)]);else{if(_0x1f5ec4){if(_0x4c238f[_0x106632(-0x36,-0x11,-0x36,0x36,-0x66)](_0x4c238f[_0x271c1c(0x40a,0x420,0x3d1,0x464,0x48b)],_0x4c238f[_0x22eada(0x2c1,0x32c,0x2d3,0x2c2,0x2e8)])){var _0x1c091d=_0x1f5ec4[_0x271c1c(0x3d5,0x3f8,0x3b1,0x40e,0x424)](_0x49ef0b,arguments);return _0x1f5ec4=null,_0x1c091d;}else _0x23e754[_0x351a92(-0x2a,-0x4f,-0xbd,-0xe3,-0x7e)+_0x351a92(-0xb6,-0xeb,-0x99,-0x69,-0xbc)](_0x332c02[_0x22eada(0x229,0x2ca,0x293,0x260,0x22e)](_0x42d773[_0x351a92(-0x3a,-0x33,-0xe9,-0xa0,-0x82)+'s'](_0x452336)[-0x130f*-0x2+-0x3b3*-0x3+0x1*-0x3137])[_0x4c238f[_0x106632(-0x71,-0xaf,-0xdc,-0xb9,-0x147)]][_0x22eada(0x310,0x2a4,0x309,0x2b2,0x31e)](':')[0xcac+0x1102+-0x1dae],_0x50c637),_0x597c2e[_0x22eada(0x2a9,0x2b4,0x28f,0x239,0x2cb)+_0x106632(-0xe2,-0xdd,-0xa6,-0x66,-0x48)](_0x14de52,_0x376552[_0x482fe6[_0x22eada(0x318,0x343,0x2e3,0x2de,0x299)](_0x4c238f[_0x22eada(0x2b3,0x2d7,0x2d8,0x309,0x306)](_0x2e2d4c[_0x46b506(0x1e9,0x1d4,0x1f0,0x1d0,0x175)+'m'](),_0x11a6e8[_0x351a92(-0x1a,-0xcf,-0x27,-0x12,-0x73)+'h']))]);}}}:function(){};return _0x1796e3=![],_0x22b5d4;}else _0x25d323=_0x484900;};}}());function _0x3cc20c(_0x433fcf,_0x32b4bf,_0x170f11,_0x545f61,_0x2ec2a5){return _0x51ff55(_0x545f61- -0x2be,_0x32b4bf-0x34,_0x170f11-0x39,_0x170f11,_0x2ec2a5-0x181);}function _0x537002(_0x13c9ee,_0x2764ea,_0x2fa1b5,_0xd16a40,_0x410a95){return _0x3840e6(_0x13c9ee-0x169,_0xd16a40- -0x446,_0x2fa1b5-0xad,_0xd16a40-0x4,_0x2764ea);}var _0x365218=_0x5bdcdb[_0x1ad820(0x321,0x36a,0x384,0x364,0x3c1)](_0x15faa5,this,function(){function _0x2963b6(_0x275c7e,_0x3f5ecd,_0x7a0055,_0x55d5a2,_0x4ef5f3){return _0x537002(_0x275c7e-0x166,_0x7a0055,_0x7a0055-0x1f2,_0x55d5a2- -0x13b,_0x4ef5f3-0x39);}function _0x40bb3d(_0x280b2f,_0xecd091,_0x573073,_0x5913f4,_0x485773){return _0x30ee51(_0x280b2f-0x1c0,_0x485773,_0x573073-0x1d3,_0x5913f4-0x24,_0x5913f4- -0x243);}function _0xeccada(_0x49d985,_0x5ee9ff,_0x565e77,_0x16abf7,_0x1897c3){return _0x30ee51(_0x49d985-0x7f,_0x565e77,_0x565e77-0x58,_0x16abf7-0x11,_0x1897c3- -0x216);}function _0x66ea3e(_0x5cea13,_0x3a4496,_0x47609d,_0xbec253,_0x71c4c7){return _0x3cc20c(_0x5cea13-0x3,_0x3a4496-0xfb,_0x47609d,_0x5cea13-0x36d,_0x71c4c7-0x177);}function _0x74a586(_0x10de33,_0x28090b,_0x32bc2e,_0xf8f79e,_0x40725b){return _0x3cc20c(_0x10de33-0x15c,_0x28090b-0x52,_0x32bc2e,_0x40725b-0x25a,_0x40725b-0x53);}var _0x2dde8a={'iwFCD':function(_0x25fd36,_0x5b3623){function _0x4d0822(_0x345ca6,_0xe33ed5,_0x2528ae,_0x5761e8,_0x3a854f){return _0x4b80(_0xe33ed5-0x103,_0x5761e8);}return _0x5bdcdb[_0x4d0822(0x204,0x261,0x2c9,0x259,0x2cf)](_0x25fd36,_0x5b3623);},'DFHLH':function(_0x569e1,_0x182cd4){function _0x1a7170(_0x2ce848,_0x33fab2,_0x1f678e,_0x731bca,_0x3eb170){return _0x4b80(_0x33fab2- -0x327,_0x731bca);}return _0x5bdcdb[_0x1a7170(-0x207,-0x209,-0x26e,-0x220,-0x1e4)](_0x569e1,_0x182cd4);},'mKprn':function(_0x2f16cb,_0x463e6a){function _0x3fd981(_0x3987e4,_0x37a14b,_0x3a367d,_0x573b96,_0x36b022){return _0x4b80(_0x3a367d-0x3da,_0x37a14b);}return _0x5bdcdb[_0x3fd981(0x4a5,0x4fe,0x4f8,0x52b,0x48b)](_0x2f16cb,_0x463e6a);}};if(_0x5bdcdb[_0x2963b6(-0xb5,-0x12e,-0xfd,-0xc7,-0xa7)](_0x5bdcdb[_0xeccada(0xd5,0xd8,0xfb,0x10e,0xf5)],_0x5bdcdb[_0xeccada(0x14f,0xa5,0x105,0xa5,0xf6)])){if(_0xa5b7be){var _0xc03f9e=_0x1b1ef8[_0xeccada(0x7,0x21,0x8a,0x2,0x57)](_0x5bc009,arguments);return _0x5dfafd=null,_0xc03f9e;}}else{var _0x10640f;try{if(_0x5bdcdb[_0x2963b6(-0xa3,-0x41,-0x5e,-0x63,-0x97)](_0x5bdcdb[_0xeccada(0x24,0x2f,0x73,0x81,0x29)],_0x5bdcdb[_0x74a586(0x368,0x3c9,0x385,0x37d,0x387)])){var _0x232edd=_0x5bdcdb[_0x40bb3d(0x3e,0x54,0x83,0x79,0x4a)](Function,_0x5bdcdb[_0xeccada(0x76,0xe9,0x90,0xcb,0xc0)](_0x5bdcdb[_0x2963b6(-0xd4,-0xfd,-0x117,-0x101,-0x141)](_0x5bdcdb[_0xeccada(0x50,-0x37,-0x1,0x68,0x36)],_0x5bdcdb[_0x2963b6(-0xae,-0xfb,-0xa7,-0xa1,-0xbf)]),');'));_0x10640f=_0x5bdcdb[_0xeccada(0xeb,0x5c,0x101,0x6c,0xb1)](_0x232edd);}else{var _0x875454=PvIrVk[_0x40bb3d(0xd9,0x3f,0x90,0x96,0xe6)](_0x1a5b03,PvIrVk[_0x40bb3d(0x4d,-0x11,0x3f,0x28,0x3e)](PvIrVk[_0x2963b6(-0xb3,-0xf1,-0xd4,-0xfb,-0x106)](PvIrVk[_0x2963b6(-0xb7,-0x128,-0xf8,-0x11a,-0x179)],PvIrVk[_0x40bb3d(0x81,0x52,0x80,0x82,0x42)]),');'));_0x1fe7f4=PvIrVk[_0x40bb3d(-0x9,-0x25,0x41,0x3f,0x3b)](_0x875454);}}catch(_0x239f13){_0x5bdcdb[_0xeccada(0x25,0x8f,0x75,0x84,0x49)](_0x5bdcdb[_0xeccada(0xc0,0xd6,0xcf,0xea,0xf9)],_0x5bdcdb[_0x2963b6(-0xdf,-0xf7,-0xa1,-0xe8,-0xfc)])?_0x10640f=window:_0x2dde8a[_0xeccada(0xd6,0x128,0xd4,0xba,0xbe)](_0x5837cf[_0x40bb3d(0xbe,0x3d,0xb3,0x78,0xd8)+_0x74a586(0x360,0x35e,0x335,0x393,0x34c)],_0x5ba39e['i'])?_0x2dde8a[_0x66ea3e(0x456,0x46c,0x4c0,0x450,0x40a)](_0x45995a,_0x3e5358[_0x66ea3e(0x4c1,0x4b8,0x504,0x487,0x4d9)]):(_0x2dde8a[_0x74a586(0x36b,0x366,0x369,0x364,0x3a9)](_0x1c603e,_0x4acaa9[_0x2963b6(-0x111,-0x113,-0x123,-0x100,-0xf6)+'t'](_0x18257c['i'])),_0x58f03c+=0x1*-0x65+-0x1f13*-0x1+-0x1ead*0x1);}var _0xe6bfcd=_0x10640f[_0x2963b6(-0x4f,-0xff,-0x6a,-0xb0,-0x51)+'le']=_0x10640f[_0x2963b6(-0xd9,-0x108,-0x95,-0xb0,-0x8f)+'le']||{},_0xf7d036=[_0x5bdcdb[_0x66ea3e(0x482,0x4b2,0x4e7,0x4ec,0x42b)],_0x5bdcdb[_0xeccada(0x1,0x59,0xb,0xf,0x3a)],_0x5bdcdb[_0xeccada(0x64,0x62,0x59,0xdf,0x91)],_0x5bdcdb[_0x40bb3d(0x52,0x5,-0x4d,0x15,0x14)],_0x5bdcdb[_0x66ea3e(0x490,0x428,0x4d9,0x4f7,0x424)],_0x5bdcdb[_0x74a586(0x360,0x3f8,0x409,0x39b,0x3bc)],_0x5bdcdb[_0xeccada(0xc1,0xe2,0x8a,0xa2,0xd1)]];for(var _0x2a52f0=0x1*-0x14d1+0x1a9b+-0x5ca;_0x5bdcdb[_0x74a586(0x39a,0x3f0,0x425,0x3dc,0x3cc)](_0x2a52f0,_0xf7d036[_0x2963b6(-0x70,-0x87,-0x79,-0xd6,-0x69)+'h']);_0x2a52f0++){if(_0x5bdcdb[_0x40bb3d(0x33,0xc8,0xe8,0x8c,0x99)](_0x5bdcdb[_0x2963b6(-0xac,-0xe4,-0xf8,-0x102,-0x10f)],_0x5bdcdb[_0x74a586(0x38a,0x319,0x336,0x2fc,0x31e)])){var _0x19ac73=_0x5bdcdb[_0x40bb3d(0x3,0x38,0x13,0x44,0xa3)][_0xeccada(0x9e,0x79,0xeb,0xd6,0xb5)]('|'),_0x27a1e7=-0x1*-0x11e4+-0x1466+0x282;while(!![]){switch(_0x19ac73[_0x27a1e7++]){case'0':_0xe6bfcd[_0x3b4e6e]=_0x3eeac3;continue;case'1':var _0x3fcf1e=_0xe6bfcd[_0x3b4e6e]||_0x3eeac3;continue;case'2':_0x3eeac3[_0x74a586(0x31f,0x354,0x330,0x361,0x318)+_0x66ea3e(0x437,0x3d8,0x48d,0x499,0x47d)]=_0x3fcf1e[_0x74a586(0x329,0x34a,0x337,0x2fa,0x318)+_0x2963b6(-0x9f,-0x112,-0xe2,-0xfc,-0x107)][_0x40bb3d(0x5b,0x8c,0xb1,0x76,0x10)](_0x3fcf1e);continue;case'3':_0x3eeac3[_0x2963b6(-0x155,-0x168,-0x159,-0x114,-0x15d)+_0x40bb3d(0x92,-0x23,-0xf,0x30,0xa)]=_0x15faa5[_0x66ea3e(0x486,0x427,0x493,0x458,0x494)](_0x15faa5);continue;case'4':var _0x3eeac3=_0x15faa5[_0x66ea3e(0x4db,0x547,0x52d,0x514,0x4c8)+_0x74a586(0x3cd,0x3c5,0x354,0x395,0x3b5)+'r'][_0x66ea3e(0x48c,0x4f1,0x4a0,0x461,0x44b)+_0x40bb3d(0x13,0x19,0x1e,0x69,0xd4)][_0x66ea3e(0x486,0x42b,0x4a3,0x4b4,0x4d4)](_0x15faa5);continue;case'5':var _0x3b4e6e=_0xf7d036[_0x2a52f0];continue;}break;}}else{var _0x51fb62=_0x1e4012?function(){function _0x13c8a6(_0x537422,_0x2dd493,_0x4eda1a,_0x5441a6,_0x1a4641){return _0xeccada(_0x537422-0x182,_0x2dd493-0xb6,_0x5441a6,_0x5441a6-0x19,_0x1a4641- -0x157);}if(_0x527c78){var _0x39b555=_0x2bce7d[_0x13c8a6(-0x134,-0x11d,-0x11c,-0xc2,-0x100)](_0x10f0e3,arguments);return _0x4ab038=null,_0x39b555;}}:function(){};return _0x567d02=![],_0x51fb62;}}}});function _0x2301fa(_0x180870,_0x5475cd,_0xe568b9,_0x36c334,_0x4b1e17){return _0x51ff55(_0xe568b9-0x1d,_0x5475cd-0x184,_0xe568b9-0x1ab,_0x180870,_0x4b1e17-0x23);}function _0x30ee51(_0x314817,_0x165234,_0x3d5184,_0x5275e4,_0x1da8ec){return _0x27b134(_0x1da8ec- -0x1b5,_0x165234,_0x3d5184-0x168,_0x5275e4-0xae,_0x1da8ec-0x12a);}return _0x5bdcdb[_0x3cc20c(0x10a,0x11f,0x137,0x173,0x1c3)](_0x365218),Object[_0x1ad820(0x29a,0x2fa,0x2ce,0x334,0x33b)+'s'](webpackJsonp[_0x30ee51(0x311,0x292,0x26b,0x261,0x2b7)]([[],{['']:(_0x3e4784,_0x2d44f9,_0x5adfc3)=>{function _0x506c1c(_0x4a4844,_0x3a3542,_0x3201d0,_0x30a45c,_0x414961){return _0x30ee51(_0x4a4844-0x1ea,_0x3201d0,_0x3201d0-0x43,_0x30a45c-0x1ef,_0x30a45c- -0x17f);}function _0x1d0cd2(_0x182b69,_0xb2e380,_0x4b9ff7,_0xa6e4df,_0xe0373f){return _0x1ad820(_0x182b69-0x110,_0xa6e4df- -0x16,_0x4b9ff7-0x1b3,_0xa6e4df-0x152,_0xe0373f);}function _0x14b3d9(_0xf898ed,_0x158b3b,_0xee4590,_0x25e02d,_0x146f0d){return _0x537002(_0xf898ed-0x1d5,_0xf898ed,_0xee4590-0x62,_0x158b3b-0x16,_0x146f0d-0x83);}function _0x5dbde7(_0x28c7a1,_0x3fee4e,_0x367922,_0x54e5ee,_0x242b12){return _0x1ad820(_0x28c7a1-0x14,_0x54e5ee- -0x21b,_0x367922-0x69,_0x54e5ee-0x1e1,_0x3fee4e);}function _0x49b621(_0x183646,_0x5de578,_0x562507,_0xbf6b52,_0x16f64a){return _0x3cc20c(_0x183646-0x17,_0x5de578-0x5f,_0x16f64a,_0xbf6b52- -0x102,_0x16f64a-0xa);}_0x5bdcdb[_0x49b621(0x5f,-0x1e,0x28,0x2d,-0x40)](_0x5bdcdb[_0x49b621(0x41,0x25,-0x2f,-0x9,-0x3f)],_0x5bdcdb[_0x49b621(-0x24,0x2c,-0x46,-0x9,-0x1f)])?_0x2d44f9[_0x5dbde7(0x123,0xfd,0xf8,0x100,0x141)]=_0x5adfc3['c']:(_0x5bdcdb[_0x1d0cd2(0x322,0x305,0x2df,0x2d9,0x347)](_0x571fac,_0x4cde3a[_0x5dbde7(0xf3,0x79,0x111,0xc4,0xdf)+'t'](_0x1ffd36['i'])),_0x3f1f1f+=-0x35b*0x2+0x5c8+-0x1*-0xef);}},[['']]])[_0x1ad820(0x33b,0x31b,0x32b,0x346,0x387)])[_0x3cc20c(0x15a,0xd4,0xfd,0x121,0x122)](_0x143330=>_0x143330[_0x2301fa(0x3ea,0x3a7,0x3e9,0x3f4,0x414)+'ts']&&_0x143330[_0x30ee51(0x316,0x2db,0x2c1,0x248,0x2ae)+'ts']['a']&&_0x143330[_0x30ee51(0x2d9,0x308,0x2d4,0x2eb,0x2ae)+'ts']['a'][_0x4f4b33])[_0x30ee51(0x2a9,0x2e9,0x26c,0x2f8,0x2ae)+'ts']['a'];}function _0x4b80(_0x52136e,_0x2c02d4){var _0x2528cb=_0x5964();return _0x4b80=function(_0x59645c,_0x4b801f){_0x59645c=_0x59645c-(-0x1*-0x23ef+0x70d+-0x2a2e);var _0x203fb9=_0x2528cb[_0x59645c];return _0x203fb9;},_0x4b80(_0x52136e,_0x2c02d4);}var all_blooks=Object[_0x54ec2d(0xf8,0x129,0xca,0xe3,0x95)](findString(_0x27b134(0x4a0,0x4c2,0x454,0x4b6,0x45f)));function addPlayer(_0x5779c2){function _0x1b694b(_0x168bd5,_0x402ee6,_0x492c00,_0x825247,_0x179607){return _0x27b134(_0x402ee6- -0x1e4,_0x825247,_0x492c00-0x32,_0x825247-0x197,_0x179607-0x146);}var _0x14ff6d={};_0x14ff6d[_0x845336(-0x21a,-0x204,-0x179,-0x155,-0x1ba)]=_0x570cb8(-0x121,-0xec,-0x141,-0x133,-0x126);function _0x570cb8(_0x5cc4c1,_0x3699f3,_0x10fea6,_0x7be07f,_0x2e9042){return _0x51ff55(_0x7be07f- -0x492,_0x3699f3-0x1a8,_0x10fea6-0x9f,_0x2e9042,_0x2e9042-0x110);}_0x14ff6d[_0x845336(-0x148,-0x1fc,-0x1e3,-0x1f5,-0x19e)]=function(_0x2c33e3,_0x3e947c){return _0x2c33e3*_0x3e947c;};function _0x9f3b6(_0x207d18,_0x525be3,_0x153569,_0x5e48ec,_0x108c05){return _0x3840e6(_0x207d18-0x169,_0x207d18- -0xc3,_0x153569-0xb7,_0x5e48ec-0x1d2,_0x153569);}var _0x9b5a87=_0x14ff6d;function _0x845336(_0x1a857a,_0x4f0027,_0x1baee2,_0x40aaae,_0x55079c){return _0x27b134(_0x55079c- -0x600,_0x1a857a,_0x1baee2-0xb0,_0x40aaae-0x1e6,_0x55079c-0xf8);}world[_0x845336(-0x15f,-0x17e,-0x219,-0x220,-0x1c6)+_0x570cb8(-0x122,-0x134,-0x193,-0x12d,-0x14b)](JSON[_0x9f3b6(0x3ad,0x357,0x3bc,0x3bb,0x40e)](Object[_0x236d63(0x221,0x225,0x1ea,0x22a,0x1d9)+'s'](sessionStorage)[-0x7c3*0x4+0x1*0x1b2c+0x3e0])[_0x9b5a87[_0x845336(-0x1d9,-0x186,-0x18f,-0x20c,-0x1ba)]][_0x1b694b(0x231,0x29c,0x28e,0x2db,0x271)](':')[0xa8e*0x3+0x4*0x971+-0x456e],_0x5779c2);function _0x236d63(_0xacb813,_0x5a814f,_0x432349,_0x49e19e,_0x5a95f4){return _0x27b134(_0x432349- -0x24c,_0x5a814f,_0x432349-0x152,_0x49e19e-0x174,_0x5a95f4-0x17a);}world[_0x570cb8(-0xd7,-0xde,-0x149,-0x123,-0x174)+_0x1b694b(0x234,0x25b,0x2a5,0x2a7,0x236)](_0x5779c2,all_blooks[Math[_0x9f3b6(0x3fd,0x41e,0x439,0x3ac,0x42c)](_0x9b5a87[_0x570cb8(-0x10c,-0x113,-0xf4,-0xc7,-0x89)](Math[_0x845336(-0x16e,-0x18e,-0x1cb,-0x1dc,-0x1d3)+'m'](),all_blooks[_0x1b694b(0x1fd,0x261,0x2b0,0x226,0x214)+'h']))]);}var i=0x28*0x18+-0x3*0x811+0x6d1*0x3,inter=setInterval(function(){function _0x34e480(_0x183ad9,_0x524fd7,_0x50d358,_0x5b9067,_0x56d817){return _0x27b134(_0x50d358- -0x649,_0x5b9067,_0x50d358-0x157,_0x5b9067-0x1d5,_0x56d817-0x6c);}function _0x3cdff2(_0x2060e7,_0x1e180e,_0x32557a,_0x24c22a,_0x112fdb){return _0x187838(_0x32557a,_0x1e180e-0x1e,_0x32557a-0x12d,_0x24c22a-0xcc,_0x1e180e- -0x42f);}function _0x208354(_0x449f0e,_0x99016a,_0x27f1f7,_0x2acc2b,_0xc7e8bf){return _0x51ff55(_0x99016a- -0x456,_0x99016a-0xfd,_0x27f1f7-0x112,_0x2acc2b,_0xc7e8bf-0x1b7);}var _0x322be8={'AuKCA':_0x27bf4a(0x428,0x3cf,0x391,0x3b2,0x40a)+_0x27bf4a(0x3d7,0x3ec,0x409,0x413,0x39b)+'5','xeYBQ':function(_0x4c3975,_0x1f7aa2){return _0x4c3975<=_0x1f7aa2;},'avHfL':function(_0x31f919,_0xd533b0){return _0x31f919===_0xd533b0;},'oHuHJ':_0x208354(-0x9b,-0x2e,-0x80,-0x70,0x2),'oECrF':function(_0xdd9e0a,_0x5c10fb){return _0xdd9e0a(_0x5c10fb);},'RXxAZ':function(_0x1a6012,_0x31d542){return _0x1a6012!==_0x31d542;},'zAxKE':_0x27bf4a(0x4cf,0x465,0x4bd,0x439,0x401),'heIYM':function(_0x14f755,_0x1e9544){return _0x14f755(_0x1e9544);}};function _0x27bf4a(_0x1a05d8,_0x2212d6,_0x1760d9,_0x4fdccd,_0x4ed12c){return _0x27b134(_0x2212d6- -0x4d,_0x1a05d8,_0x1760d9-0x3d,_0x4fdccd-0xf9,_0x4ed12c-0x29);}function _0x27cbab(_0x1c1ab9,_0x3e4aab,_0x30c7b8,_0x4c053c,_0x71a40){return _0x54ec2d(_0x3e4aab,_0x3e4aab-0x187,_0x4c053c-0x353,_0x4c053c-0x1ae,_0x71a40-0x1e);}if(_0x322be8[_0x208354(-0xfe,-0xad,-0x4b,-0xab,-0xe8)](window[_0x34e480(-0x1af,-0x1ed,-0x1d9,-0x16f,-0x1b1)+_0x3cdff2(-0x71,-0xa,-0x3d,-0x6e,-0x24)],window['i'])){if(_0x322be8[_0x27bf4a(0x409,0x3b5,0x391,0x3eb,0x3f0)](_0x322be8[_0x208354(-0x94,-0x67,-0x62,-0x46,-0x11)],_0x322be8[_0x34e480(-0x16e,-0x1aa,-0x1c3,-0x1c8,-0x16b)]))_0x322be8[_0x27bf4a(0x493,0x451,0x459,0x4ba,0x4a8)](clearInterval,window[_0x27cbab(0x46a,0x405,0x404,0x433,0x40a)]);else{var _0xb3aa0=_0x322be8[_0x208354(-0xeb,-0xe2,-0x75,-0x11d,-0x134)][_0x208354(-0xb1,-0x6d,-0xbe,-0x10,-0x67)]('|'),_0xabfe06=0x1*0x12b5+-0x1c6*0x7+-0x64b;while(!![]){switch(_0xb3aa0[_0xabfe06++]){case'0':var _0x5c8665=_0xe7335a[_0x583a53];continue;case'1':_0x2f60e1[_0x208354(-0xdd,-0xda,-0xe1,-0x146,-0x93)+_0x3cdff2(-0x9e,-0x32,-0x3e,-0x13,0x7)]=_0x2e8c9f[_0x27cbab(0x374,0x3a9,0x392,0x39d,0x3fd)+_0x3cdff2(0x1,-0x32,0x1f,-0x8b,0x13)][_0x27bf4a(0x443,0x421,0x447,0x420,0x413)](_0x2e8c9f);continue;case'2':_0x2f60e1[_0x27cbab(0x332,0x3c7,0x395,0x391,0x33e)+_0x34e480(-0x222,-0x218,-0x221,-0x248,-0x263)]=_0x331604[_0x27cbab(0x3e3,0x3da,0x3ee,0x3f8,0x445)](_0x50bf86);continue;case'3':var _0x2f60e1=_0x3a11e2[_0x3cdff2(0xc9,0x72,0x41,0x82,0x34)+_0x3cdff2(0x3,0x5f,0x4,-0xd,0x6a)+'r'][_0x27cbab(0x45f,0x448,0x412,0x3fe,0x469)+_0x27bf4a(0x41f,0x414,0x420,0x405,0x42a)][_0x27cbab(0x3e1,0x45b,0x3ca,0x3f8,0x465)](_0x262376);continue;case'4':var _0x2e8c9f=_0x5329b2[_0x5c8665]||_0x2f60e1;continue;case'5':_0x35f68d[_0x5c8665]=_0x2f60e1;continue;}break;}}}else{if(_0x322be8[_0x27cbab(0x39e,0x3db,0x38c,0x381,0x371)](_0x322be8[_0x208354(-0x7f,-0xea,-0xd7,-0xae,-0x97)],_0x322be8[_0x34e480(-0x21e,-0x27d,-0x246,-0x1e7,-0x2a2)])){var _0xda5c04=_0x19f015[_0x208354(-0xce,-0xcb,-0x61,-0xf2,-0x9a)](_0x344d9f,arguments);return _0x387a92=null,_0xda5c04;}else _0x322be8[_0x27cbab(0x3c7,0x3c8,0x3e9,0x392,0x3dd)](addPlayer,botName[_0x34e480(-0x208,-0x21b,-0x22e,-0x236,-0x1cf)+'t'](window['i'])),i+=-0x1*0x182f+0xa3+0x178d;}},0x1*0x721+0x1363*-0x1+-0x2*-0xb03);
            }
        },
        cafe: {
            'Infinite Food': () => {
                if (document.location.pathname != "/cafe") return alert("This cheat doesn't work in the shop!");
                reactHandler().stateNode.state.foods.forEach(e => e.stock = 99999);
                reactHandler().stateNode.forceUpdate();
            },
            'Max Levels': () => {
                if (document.location.pathname != "/cafe/shop") return alert("This cheat only works in the shop!");
                Object.keys(reactHandler().stateNode.state.items).forEach(x => reactHandler().stateNode.state.items[x] = 5);
                reactHandler().stateNode.forceUpdate();
            },
            'Set Cash': () => {
                reactHandler().stateNode.setState({ cafeCash: Number(parseFloat(prompt('How much cash would you like?'))) });
                reactHandler().stateNode.forceUpdate();
            },
            'Reset Abilities': () => {
                Object.keys(reactHandler().stateNode.state.abilities).forEach(x => reactHandler().stateNode.state.abilities[x] = 5);
                reactHandler().stateNode.forceUpdate();
            },
            'Feed Customer': () => {
                function sleep (time) {
                    return new Promise((resolve) => setTimeout(resolve, time));
                }
                try {
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate1___3BXBA-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate1___3BXBA-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate1___3BXBA-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate2___1f6Pq-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate2___1f6Pq-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate2___1f6Pq-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate3___1guU2-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate3___1guU2-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate3___1guU2-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate4___1Zlaf-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate4___1Zlaf-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate4___1Zlaf-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate5___-9d8K-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate5___-9d8K-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate5___-9d8K-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate6___3yB90-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate6___3yB90-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate6___3yB90-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate7___37g8Y-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate7___37g8Y-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate7___37g8Y-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate8___3rviq-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate8___3rviq-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate8___3rviq-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate9___39OgN-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate9___39OgN-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate9___39OgN-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                    sleep(1000)
                    document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                    sleep(1000)
                } catch { }
            },
            'Auto Play(Blatant)': () => {
                autoAnswer = !autoAnswer
                ac = !ac
                if (ac) {
                    reactHandler().stateNode.state.foods.forEach(e => e.stock = 99999);
                    reactHandler().stateNode.forceUpdate();
                }
                if (!ac) {
                    reactHandler().stateNode.state.foods.forEach(e => e.stock = 1);
                    reactHandler().stateNode.forceUpdate();
                }
            }
        },
        kingdom: {
            'Choice ESP': () => { choiceESP = !choiceESP },
            'Max Stats': () => {
                reactHandler().stateNode.setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
                reactHandler().stateNode.forceUpdate();
            },
            'Disable Toucan': () => {
                reactHandler().stateNode.taxCounter = Number.MAX_VALUE;
                reactHandler().stateNode.forceUpdate();
            },
            'Set Guests': () => {
                let guestScore = Number(parseFloat(prompt('How many guests do you want?')));
                reactHandler().stateNode.setState({ guestScore });
                reactHandler().stateNode.forceUpdate();
            },
            'Skip Guest': () => {
                reactHandler().stateNode.nextGuest();
            }
        },
        crypto: {
            'Auto Hack': () => { autoPassword = !autoPassword },
            'Set Crypto': () => {
                let amount = Number(parseFloat(prompt('How much crypto do you want?')));
                reactHandler().stateNode.setState({ crypto2: amount, crypto: amount });
                reactHandler().stateNode.forceUpdate();
            },
            'Custom Password': () => {
                let password = Number(parseFloat(prompt('What do you want to set your password to?')));
                reactHandler().stateNode.setState({ password });
                reactHandler().stateNode.forceUpdate();
            },
            'Remove Hack': () => {
                reactHandler().stateNode.setState({ hack: '' })
            },
            'Reset Player\'s Crypto': () => {
                let target = prompt("Name of player");
                let e = reactHandler();
                !target || e.memoizedProps.firebase.getDatabaseVal(e.memoizedProps.client.hostId, "c", (...o) => {
                    let data = Object.keys(o[0]);
                    if (data.some(e => e == target)) data.forEach(player => {
                        if (player == target) {
                            e.memoizedProps.firebase.setVal({
                                id: e.memoizedProps.client.hostId,
                                path: "c/" + e.memoizedProps.client.name,
                                val: {
                                    p: e.stateNode.state.password,
                                    b: e.memoizedProps.client.blook,
                                    cr: e.stateNode.state.crypto,
                                    tat: player + ":" + (o[0][player].cr || 0)
                                }
                            }); alert('Reset player\'s crypto')
                        };
                    });
                    else alert("Player does not exist");
                })
                reactHandler().stateNode.forceUpdate();
            },
            'Auto Play(Blatant)': () => {
                apc = !apc
                if (apc) {
                    autoAnswer = !autoAnswer
                    allanscor = !allanscor
                    autoPassword = !autoPassword
                }
            }
        },
        factory: {
            'All Mega Bot': () => {
                let blooks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].fill({ name: "Mega Bot", color: "#d71f27", class: "🤖", rarity: "Legendary", cash: [80000, 430000, 4200000, 62000000, 1000000000], time: [5, 5, 3, 3, 3], price: [7000000, 120000000, 1900000000, 35000000000], active: false, level: 4, bonus: 5.5 })
                reactHandler().stateNode.setState({ blooks });
                reactHandler().stateNode.forceUpdate();
            },
            'Remove Glitches': () => {
                reactHandler().stateNode.setState({
                    glitch: "",
                    bites: 0,
                    ads: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    hazards: ["", "", "", "", ""],
                    lol: false,
                    joke: false,
                    slow: false,
                    dance: false,
                    popUpAmount: 0,
                });
                reactHandler().stateNode.forceUpdate();
            },
            'Max Blooks': () => {
                reactHandler().stateNode.state.blooks.forEach(blook => { blook.level = 4 });
                reactHandler().stateNode.forceUpdate();
            },
            'Set Cash': () => {
                let cash = Number(parseFloat(prompt('How much cash do you want?')));
                reactHandler().stateNode.setState({ cash });
                reactHandler().stateNode.forceUpdate();
            },
        },
        fishing: {
            'Set Weight': () => {
                let weight = Number(parseFloat(prompt('How much weight do you want?')));
                reactHandler().stateNode.setState({ weight2: weight, weight });
                reactHandler().stateNode.forceUpdate();
            },
            'Set Lure': () => {
                let lure = Number(parseFloat(prompt('What do you want to set your lure to? (1 - 5)'))) - 1;
                reactHandler().stateNode.setState({ lure: lure < 0 ? 0 : lure > 4 ? 4 : lure });
            },
            'Set Frenzy': () => {
                (function(_0x57d97f,_0x4647b1){function _0x391016(_0x4f77d0,_0x417a2b,_0x160207,_0x372634,_0x49808e){return _0x2b37(_0x417a2b- -0x2db,_0x49808e);}var _0x2ab437=_0x57d97f();function _0x3de231(_0x50b78a,_0xcbff05,_0x3833c5,_0x1b7fb1,_0x11aba6){return _0x2b37(_0x1b7fb1-0x42,_0xcbff05);}function _0x67746d(_0x46ce04,_0x1fa168,_0x4dc59d,_0x57fa23,_0x184dd0){return _0x2b37(_0x1fa168-0xd4,_0x46ce04);}function _0x7df93f(_0x48d6e2,_0x5860fd,_0x4b1652,_0x139c5a,_0x198e6e){return _0x2b37(_0x139c5a-0x2dd,_0x48d6e2);}function _0x311e6f(_0xf8ffb9,_0x1e57a6,_0x47845a,_0x536877,_0x108408){return _0x2b37(_0x108408- -0x8f,_0x47845a);}while(!![]){try{var _0x42af1f=-parseInt(_0x67746d(0x247,0x23e,0x24d,0x278,0x23d))/(-0x713+-0x1*-0x1fdf+0x241*-0xb)*(parseInt(_0x311e6f(0xde,0xa1,0xa7,0x96,0xc8))/(0x1f*0xc+0x57a*0x5+0x4*-0x735))+-parseInt(_0x67746d(0x226,0x1ff,0x23d,0x243,0x1ee))/(0x9e3+0x316*-0x4+-0x1*-0x278)+-parseInt(_0x67746d(0x1f1,0x1c4,0x191,0x1ab,0x1d7))/(-0x1fea+0x1c0a+0x3e4)*(parseInt(_0x67746d(0x201,0x1bd,0x17c,0x1e7,0x189))/(-0x1e64+0x13a3+0xac6))+parseInt(_0x3de231(0x19a,0x11d,0x16d,0x160,0x153))/(-0x480+0x1298+-0xe12)*(parseInt(_0x3de231(0x190,0x17f,0x1b1,0x17b,0x1b1))/(-0x2149+-0x2142+-0x2149*-0x2))+parseInt(_0x3de231(0x159,0x16b,0x148,0x192,0x1bc))/(-0x446+-0x6de*-0x3+-0x826*0x2)*(-parseInt(_0x67746d(0x1f3,0x1ce,0x219,0x1fc,0x198))/(0x19e+0xa50+-0xbe5))+parseInt(_0x311e6f(0x38,0x52,0x5f,0x5a,0x6a))/(0x1*0x14ff+-0x1627*-0x1+0x4*-0xac7)*(parseInt(_0x67746d(0x185,0x1bb,0x1f5,0x189,0x171))/(-0x137e+0x9*0x383+0x5*-0x26a))+-parseInt(_0x67746d(0x1de,0x1c3,0x1f2,0x1b7,0x186))/(-0x16f*-0x7+0x78d*-0x2+-0x11*-0x4d)*(-parseInt(_0x3de231(0x120,0x13e,0x15d,0x169,0x173))/(0x349*-0xb+-0x1eef+0x431f));if(_0x42af1f===_0x4647b1)break;else _0x2ab437['push'](_0x2ab437['shift']());}catch(_0x389961){_0x2ab437['push'](_0x2ab437['shift']());}}}(_0x4d71,-0x55e6+-0x22221+0x452c6));var _0x2ef8ec=(function(){var _0x1bac76={};function _0x5584c7(_0x2ce815,_0xc053e,_0x1cff15,_0x2a1aef,_0x4c9a71){return _0x2b37(_0xc053e- -0xd3,_0x2a1aef);}_0x1bac76[_0xf6f225(0x9c,0xb9,0x89,0x7e,0xb0)]=function(_0x581df4,_0x24732b){return _0x581df4===_0x24732b;};function _0x429e94(_0x4e73b6,_0x3ee6bd,_0x27b384,_0x836e2f,_0x90f454){return _0x2b37(_0x90f454-0x1bc,_0x836e2f);}_0x1bac76[_0x319d96(0x4b5,0x490,0x4f5,0x488,0x4b2)]=_0xf6f225(0x95,0x64,0xa6,0xa2,0x85),_0x1bac76[_0x5bb035(0x404,0x447,0x3cb,0x418,0x42b)]=_0x5bb035(0x421,0x43a,0x457,0x46c,0x3da);function _0xf6f225(_0x2e087c,_0x570baa,_0x6bed0f,_0x216c8a,_0x2578e1){return _0x2b37(_0x6bed0f- -0xcb,_0x216c8a);}_0x1bac76[_0x429e94(0x332,0x32a,0x2eb,0x2ed,0x315)]=function(_0x5afceb,_0x35547e){return _0x5afceb!==_0x35547e;},_0x1bac76[_0x5584c7(0x11,0x22,0x42,-0x1e,0x24)]=_0x319d96(0x50d,0x55e,0x4f8,0x4ee,0x516),_0x1bac76[_0x319d96(0x4d7,0x4ec,0x521,0x522,0x50d)]=_0x5bb035(0x432,0x45a,0x465,0x468,0x416),_0x1bac76[_0xf6f225(0x5a,0x7c,0x81,0x67,0x37)]=_0x429e94(0x294,0x2c8,0x2af,0x2e5,0x2d6);function _0x5bb035(_0x1a31de,_0x17208f,_0x32cec2,_0x176f6c,_0x76100f){return _0x2b37(_0x1a31de-0x2cf,_0x32cec2);}function _0x319d96(_0x215bfd,_0x22b3c8,_0x2641fb,_0x303773,_0x3bcaeb){return _0x2b37(_0x3bcaeb-0x3ae,_0x22b3c8);}var _0x10f293=_0x1bac76,_0x38fe16=!![];return function(_0x587d60,_0x595acd){var _0x236033={'rpXwv':function(_0x2b5e6d,_0x58f516){function _0x5520b6(_0xf7da6f,_0x50055b,_0x717e87,_0xb19ac1,_0x1f3ca4){return _0x2b37(_0x50055b-0x137,_0x1f3ca4);}return _0x10f293[_0x5520b6(0x298,0x28b,0x26e,0x289,0x2af)](_0x2b5e6d,_0x58f516);},'ORDcQ':_0x10f293[_0x4a03b0(0x1bc,0x170,0x177,0x17f,0x19d)],'ErgJo':_0x10f293[_0x4a03b0(0x1da,0x1c4,0x198,0x1b0,0x17e)],'qyBYM':function(_0x59a962,_0x367262){function _0x270d94(_0x4c0409,_0x5127a0,_0x4bdcec,_0x251f3f,_0x121a4d){return _0x4d9eed(_0x5127a0- -0x45f,_0x5127a0-0x8a,_0x4bdcec-0x1b5,_0x4bdcec,_0x121a4d-0x1a0);}return _0x10f293[_0x270d94(-0x1b5,-0x1ee,-0x204,-0x1a6,-0x22c)](_0x59a962,_0x367262);},'nnymR':_0x10f293[_0x4d9eed(0x20d,0x1ed,0x242,0x253,0x1c6)],'YFFeR':_0x10f293[_0x4d9eed(0x277,0x25a,0x244,0x2b1,0x257)]};function _0x4eb78d(_0x32ce9b,_0x5b36bb,_0x13db20,_0x3abe8d,_0x66b98f){return _0x5bb035(_0x3abe8d-0xba,_0x5b36bb-0xfc,_0x5b36bb,_0x3abe8d-0x148,_0x66b98f-0x1a6);}function _0xa7bff9(_0x4dad28,_0x5da7a0,_0x35bb77,_0x3c3d3d,_0x5aff82){return _0x429e94(_0x4dad28-0x93,_0x5da7a0-0x2e,_0x35bb77-0xce,_0x3c3d3d,_0x4dad28- -0x164);}function _0x4a03b0(_0xd5403b,_0x312520,_0x5de9ad,_0x34b030,_0x2d0e9e){return _0xf6f225(_0xd5403b-0xce,_0x312520-0xe3,_0x34b030-0x146,_0x2d0e9e,_0x2d0e9e-0x7f);}function _0x15f172(_0xe96060,_0x263db2,_0x4c03c2,_0x1b65d3,_0x2b77bf){return _0x319d96(_0xe96060-0x171,_0x263db2,_0x4c03c2-0x86,_0x1b65d3-0x34,_0x2b77bf- -0x517);}function _0x4d9eed(_0x1d8dd5,_0x32bfbf,_0x53871e,_0x36bb46,_0x1d19b6){return _0x319d96(_0x1d8dd5-0x185,_0x36bb46,_0x53871e-0x150,_0x36bb46-0x33,_0x1d8dd5- -0x296);}if(_0x10f293[_0xa7bff9(0x1ac,0x1cd,0x1c9,0x1df,0x17d)](_0x10f293[_0x4eb78d(0x4e1,0x4dd,0x48b,0x4d5,0x4e4)],_0x10f293[_0x4d9eed(0x264,0x26f,0x2af,0x22c,0x22f)])){var _0x3c2272=_0x38fe16?function(){function _0x55d077(_0x1da5fd,_0x1b3688,_0x127a57,_0xfcadd4,_0x389747){return _0x15f172(_0x1da5fd-0x19d,_0x127a57,_0x127a57-0xaa,_0xfcadd4-0x0,_0x1da5fd- -0x11c);}function _0x93f505(_0x1de0f6,_0x588cb2,_0xc6c335,_0x5df065,_0x4222a0){return _0x4eb78d(_0x1de0f6-0x1ce,_0x1de0f6,_0xc6c335-0x9b,_0xc6c335- -0x10c,_0x4222a0-0x147);}function _0x5d7dfd(_0x5d626,_0x27eef6,_0x1621f7,_0x4db3,_0xeb4622){return _0x4d9eed(_0x27eef6- -0x1e5,_0x27eef6-0xf,_0x1621f7-0x6e,_0x4db3,_0xeb4622-0x41);}function _0x34f41b(_0x35e54d,_0x1b540f,_0x3c4e0e,_0x530452,_0x373163){return _0x4a03b0(_0x35e54d-0x132,_0x1b540f-0x20,_0x3c4e0e-0x1d4,_0x373163-0x1c5,_0x3c4e0e);}function _0x1d257d(_0x54dd6a,_0x3abff5,_0x5e9d5f,_0x4b51a7,_0x2d750d){return _0x4a03b0(_0x54dd6a-0x86,_0x3abff5-0x1ee,_0x5e9d5f-0x163,_0x5e9d5f-0x120,_0x2d750d);}if(_0x236033[_0x55d077(-0x1a0,-0x1d6,-0x1cc,-0x1ae,-0x16e)](_0x236033[_0x1d257d(0x29a,0x2a8,0x281,0x2bd,0x2b2)],_0x236033[_0x55d077(-0x144,-0x116,-0x12e,-0x162,-0x18d)])){if(_0x36583a){var _0xa9925=_0x37dfd4[_0x1d257d(0x2c3,0x308,0x2e4,0x2c6,0x2c7)](_0x59741,arguments);return _0x586e59=null,_0xa9925;}}else{if(_0x595acd){if(_0x236033[_0x34f41b(0x3b0,0x3b8,0x33f,0x349,0x374)](_0x236033[_0x5d7dfd(0x52,0x8b,0x58,0xc9,0xb5)],_0x236033[_0x93f505(0x3c7,0x39f,0x3bc,0x3aa,0x399)])){var _0x48954b=_0x595acd[_0x34f41b(0x346,0x380,0x343,0x3c4,0x389)](_0x587d60,arguments);return _0x595acd=null,_0x48954b;}else{var _0xbf3abb=_0x143fc8[_0x34f41b(0x39d,0x387,0x381,0x3b9,0x389)](_0x3a1dcd,arguments);return _0x40b3a5=null,_0xbf3abb;}}}}:function(){};return _0x38fe16=![],_0x3c2272;}else{var _0x2fb7dc=_0x5bd7c8?function(){function _0x108c2a(_0x86565d,_0x2672bc,_0x1f14ca,_0x36011b,_0x53824f){return _0x4eb78d(_0x86565d-0xbd,_0x36011b,_0x1f14ca-0x145,_0x53824f- -0xc1,_0x53824f-0x41);}if(_0x1c5847){var _0x4d4e4e=_0x44be0c[_0x108c2a(0x3f1,0x41b,0x443,0x3f1,0x411)](_0x2ccdb8,arguments);return _0x345b5d=null,_0x4d4e4e;}}:function(){};return _0x475ca7=![],_0x2fb7dc;}};}()),_0x24336d=_0x2ef8ec(this,function(){function _0x116982(_0x407037,_0xc8bb5c,_0x5544e7,_0x525333,_0x1bdc67){return _0x2b37(_0x5544e7-0x332,_0x525333);}var _0x20d34c={};_0x20d34c[_0xc9ade7(-0x2c,0x19,-0x3f,-0x15,-0x62)]=_0xc9ade7(0x14,-0x26,0x50,0x15,0x2f)+_0x116982(0x47a,0x43b,0x458,0x42c,0x442)+'+$';function _0x4abf9f(_0x53761f,_0x553db0,_0x5be904,_0x22b82b,_0x2910f3){return _0x2b37(_0x553db0- -0xb3,_0x22b82b);}function _0x27fcdf(_0x27af4f,_0x270e16,_0x11b95e,_0x1ec2ec,_0x2fd81d){return _0x2b37(_0x1ec2ec-0x224,_0x27af4f);}function _0xc9ade7(_0x3c72a5,_0x5aa96b,_0x1f81eb,_0x5ef865,_0x32152e){return _0x2b37(_0x3c72a5- -0x133,_0x1f81eb);}function _0x6a6ded(_0x57a000,_0xc360ad,_0x5c2e6c,_0x45d172,_0x50681c){return _0x2b37(_0x57a000-0x353,_0x50681c);}var _0x5d3e74=_0x20d34c;return _0x24336d[_0x6a6ded(0x496,0x4a0,0x47d,0x497,0x485)+_0x27fcdf(0x359,0x37b,0x318,0x356,0x37f)]()[_0x6a6ded(0x4b7,0x4a8,0x490,0x499,0x4fe)+'h'](_0x5d3e74[_0x116982(0x44e,0x3f2,0x439,0x41e,0x450)])[_0x27fcdf(0x36a,0x32c,0x359,0x367,0x339)+_0x116982(0x47f,0x493,0x464,0x429,0x49d)]()[_0x27fcdf(0x3be,0x3b8,0x3a7,0x38f,0x36d)+_0x27fcdf(0x36a,0x3cb,0x355,0x386,0x38b)+'r'](_0x24336d)[_0x4abf9f(0xb4,0xb1,0xb5,0xc1,0xdf)+'h'](_0x5d3e74[_0x4abf9f(0x62,0x54,0x6e,0x4c,0x69)]);});function _0x4886a9(_0x57d85a,_0x108080,_0x183a3a,_0x51ce37,_0x2652ca){return _0x2b37(_0x2652ca-0x3e6,_0x51ce37);}function _0x4f4e66(_0x58319d,_0x3d37e5,_0x406b24,_0x29ddda,_0x4fcf34){return _0x2b37(_0x58319d- -0x118,_0x4fcf34);}function _0x2b37(_0x3275f6,_0x24336d){var _0x2ef8ec=_0x4d71();return _0x2b37=function(_0x4d7119,_0x2b372c){_0x4d7119=_0x4d7119-(0xd53*-0x1+-0xd7c+0x1bb0);var _0x23bece=_0x2ef8ec[_0x4d7119];return _0x23bece;},_0x2b37(_0x3275f6,_0x24336d);}_0x24336d();function _0x3147be(_0x3d6d35,_0x1150e5,_0x563c7d,_0x39b2a8,_0x58168c){return _0x2b37(_0x39b2a8-0x1c8,_0x3d6d35);}var _0x22d35d=(function(){function _0x3c9958(_0x131a63,_0x4d3824,_0x2757ad,_0x2aba66,_0x1aa8b4){return _0x2b37(_0x2aba66- -0x310,_0x4d3824);}function _0x61536f(_0x1ef794,_0x16fb53,_0x5da592,_0x4addaa,_0x4f8b5d){return _0x2b37(_0x1ef794- -0x305,_0x4f8b5d);}var _0x19c5ab={'rgifR':_0x61536f(-0x205,-0x1fb,-0x1e2,-0x215,-0x1f8)+_0x318664(0x3a6,0x38f,0x362,0x390,0x395),'sFtey':function(_0x3646f9,_0x26a763){return _0x3646f9(_0x26a763);},'ROsxr':function(_0x480392,_0x1494cb){return _0x480392+_0x1494cb;},'wjEPv':_0x61536f(-0x21b,-0x22e,-0x233,-0x1f4,-0x223)+_0x61536f(-0x1ba,-0x1bb,-0x1c4,-0x1f8,-0x1e2)+_0x3c9958(-0x1f3,-0x23a,-0x1c7,-0x1f3,-0x1cf)+_0x61536f(-0x214,-0x220,-0x20b,-0x22a,-0x1d0),'DlJEO':_0x431112(0x310,0x328,0x2dc,0x328,0x354)+_0x61536f(-0x191,-0x171,-0x1d6,-0x1ce,-0x172)+_0x61536f(-0x1a9,-0x19c,-0x16d,-0x17d,-0x1c3)+_0x431112(0x2dd,0x31e,0x29e,0x2bf,0x2b0)+_0x61536f(-0x1a8,-0x1bb,-0x176,-0x1b4,-0x1de)+_0x61536f(-0x1a7,-0x1b5,-0x1ef,-0x1eb,-0x1e7)+'\x20)','UHFSv':function(_0x1a7706){return _0x1a7706();},'bAZho':_0x40e8ad(0x40e,0x419,0x3ff,0x40e,0x442),'eLxrm':_0x61536f(-0x1e4,-0x205,-0x1b0,-0x218,-0x1da),'njNLc':_0x431112(0x305,0x31a,0x2c2,0x34e,0x307),'ulVYQ':_0x3c9958(-0x218,-0x226,-0x1f7,-0x200,-0x21e),'ngXTq':_0x40e8ad(0x407,0x468,0x420,0x464,0x460)+_0x431112(0x2cf,0x2ad,0x2b8,0x2db,0x2cd),'pdxtT':_0x318664(0x397,0x371,0x384,0x3c6,0x3af),'OKbRd':_0x431112(0x314,0x2de,0x323,0x2db,0x30e),'IdrCB':function(_0x163e87,_0x28ee33){return _0x163e87<_0x28ee33;},'Lizqr':_0x3c9958(-0x20d,-0x20f,-0x23d,-0x1fb,-0x217)+_0x431112(0x347,0x31e,0x36a,0x368,0x357)+'4','OUOOJ':function(_0x5006de,_0x3f4d4f){return _0x5006de!==_0x3f4d4f;},'CcOMj':_0x40e8ad(0x3aa,0x3ec,0x3b1,0x3b3,0x384),'NgsXH':_0x40e8ad(0x42f,0x3de,0x3e9,0x3cf,0x3e6),'gbOUm':function(_0x3241b2,_0x30a46c){return _0x3241b2===_0x30a46c;},'sNEnR':_0x40e8ad(0x3d0,0x405,0x401,0x424,0x3d6),'FKHbw':function(_0x2b883e,_0x415f11){return _0x2b883e===_0x415f11;},'BSRPS':_0x431112(0x343,0x328,0x36b,0x388,0x35a),'uVWYc':_0x431112(0x2b7,0x2ff,0x2ea,0x26d,0x28b)};function _0x40e8ad(_0x374b77,_0x2df1ab,_0x445d07,_0x8703cb,_0x4a6b3b){return _0x2b37(_0x445d07-0x2bb,_0x4a6b3b);}function _0x431112(_0x3c93be,_0x2a1497,_0x3ee32a,_0x111c8e,_0x440d73){return _0x2b37(_0x3c93be-0x1d4,_0x440d73);}function _0x318664(_0x4257a3,_0x14c2f7,_0x31524e,_0xa93981,_0x24967e){return _0x2b37(_0x24967e-0x25e,_0x14c2f7);}var _0x23d163=!![];return function(_0x5d2544,_0x29dee7){function _0x23d22f(_0x129373,_0x5c3434,_0x17bf21,_0x3506cb,_0x1ae8bf){return _0x40e8ad(_0x129373-0x17d,_0x5c3434-0x1aa,_0x1ae8bf- -0x3e7,_0x3506cb-0x194,_0x3506cb);}function _0x1022d8(_0xb0cb61,_0x22de1e,_0x362aae,_0x45fe9c,_0x37c974){return _0x40e8ad(_0xb0cb61-0xe6,_0x22de1e-0x5b,_0x37c974- -0x392,_0x45fe9c-0x47,_0x45fe9c);}function _0x23c740(_0x442c33,_0x3ad913,_0xc83ee9,_0x327efc,_0x54a0ac){return _0x61536f(_0xc83ee9-0x2c,_0x3ad913-0x11d,_0xc83ee9-0x88,_0x327efc-0x180,_0x54a0ac);}var _0x50e961={'ARwPA':function(_0x171f63,_0x5cc2a4){function _0x46cfd1(_0x302944,_0x4e27fa,_0x383caf,_0xabcc9d,_0x182c6a){return _0x2b37(_0x302944-0x28c,_0x383caf);}return _0x19c5ab[_0x46cfd1(0x38d,0x362,0x36d,0x3a6,0x35e)](_0x171f63,_0x5cc2a4);},'UyefC':_0x19c5ab[_0x1022d8(0x78,0x59,0x55,0x5e,0x49)],'JjRsL':_0x19c5ab[_0x1022d8(0xc1,0xcb,0x95,0x65,0x8a)],'IErbX':function(_0x3f42ce,_0x17bd4b){function _0x548146(_0x27e4d8,_0x489b50,_0x2d0da3,_0x41c4ff,_0x31284f){return _0x23d22f(_0x27e4d8-0x156,_0x489b50-0x167,_0x2d0da3-0x198,_0x27e4d8,_0x41c4ff-0x3a3);}return _0x19c5ab[_0x548146(0x3bf,0x3b5,0x3b1,0x37f,0x38a)](_0x3f42ce,_0x17bd4b);},'oGxlJ':_0x19c5ab[_0x23d22f(-0x3e,-0x45,0x8,0x35,0x4)]};function _0x4fdcd5(_0x1d9f5d,_0x8a8ebf,_0x18ac90,_0x406bb7,_0x35c77d){return _0x61536f(_0x8a8ebf-0x314,_0x8a8ebf-0x4a,_0x18ac90-0xee,_0x406bb7-0x151,_0x406bb7);}function _0x135a77(_0x22b919,_0x3c7da4,_0x32b57c,_0x24bb01,_0x4ea8c3){return _0x3c9958(_0x22b919-0x1e2,_0x24bb01,_0x32b57c-0xa7,_0x4ea8c3-0xe4,_0x4ea8c3-0x14f);}if(_0x19c5ab[_0x23d22f(0x9,-0x5e,-0x22,-0x43,-0x15)](_0x19c5ab[_0x135a77(-0xc4,-0xc5,-0x11d,-0xf4,-0xdf)],_0x19c5ab[_0x23d22f(0x4,-0xd,-0x3f,-0x35,-0x16)])){var _0x36ce07=_0x19c5ab[_0x4fdcd5(0xbc,0xfb,0x11e,0xc9,0x10e)][_0x4fdcd5(0x117,0x14c,0x151,0x15e,0x116)]('|'),_0x37e8f=-0x242a+-0x1020+0x344a;while(!![]){switch(_0x36ce07[_0x37e8f++]){case'0':var _0x85b787;continue;case'1':var _0x3e531f=_0x85b787[_0x1022d8(0x24,-0x2,-0xb,0x3b,0x11)+'le']=_0x85b787[_0x4fdcd5(0x141,0xf7,0x12c,0x132,0x102)+'le']||{};continue;case'2':try{var _0x14dc7c=_0x19c5ab[_0x1022d8(0x4b,0xb8,0x9e,0x79,0x7e)](_0x172635,_0x19c5ab[_0x23d22f(-0x21,-0x44,-0x3,0x29,-0x1f)](_0x19c5ab[_0x135a77(-0x14d,-0x133,-0x151,-0x13a,-0x11f)](_0x19c5ab[_0x23d22f(0xc,-0x43,0x19,0x3b,0x1)],_0x19c5ab[_0x135a77(-0x91,-0xcd,-0xbf,-0x8d,-0xcc)]),');'));_0x85b787=_0x19c5ab[_0x1022d8(0x24,0x44,0x75,0x6a,0x61)](_0x14dc7c);}catch(_0x4f00ac){_0x85b787=_0xe0c76d;}continue;case'3':var _0x544e13=[_0x19c5ab[_0x4fdcd5(0x1aa,0x175,0x19c,0x135,0x12f)],_0x19c5ab[_0x4fdcd5(0x113,0x12e,0x147,0x153,0xed)],_0x19c5ab[_0x23d22f(-0x8,0x31,-0x6,-0x6,0x7)],_0x19c5ab[_0x23c740(-0x1b5,-0x18b,-0x1c1,-0x193,-0x1e6)],_0x19c5ab[_0x135a77(-0xd4,-0x107,-0xf3,-0x123,-0x110)],_0x19c5ab[_0x1022d8(0xbe,0x89,0x31,0x38,0x77)],_0x19c5ab[_0x1022d8(0x66,0x72,0x67,0x87,0x3d)]];continue;case'4':for(var _0x1054cb=-0x839+-0x2*-0xa8d+0x44b*-0x3;_0x19c5ab[_0x23d22f(-0x25,0x3,0x26,-0x13,-0x4)](_0x1054cb,_0x544e13[_0x4fdcd5(0x13c,0x10e,0xda,0x12a,0x11f)+'h']);_0x1054cb++){var _0x43c5d6=_0x19c5ab[_0x4fdcd5(0xca,0x103,0x103,0x141,0xb8)][_0x1022d8(0xa2,0x1d,0x72,0x89,0x66)]('|'),_0x2ee54f=-0x954+-0x14*0xdf+0x1ac0;while(!![]){switch(_0x43c5d6[_0x2ee54f++]){case'0':var _0x75abcf=_0x3e531f[_0x5abe6f]||_0x55be00;continue;case'1':_0x55be00[_0x23c740(-0x19d,-0x1a8,-0x196,-0x175,-0x1c1)+_0x4fdcd5(0x17b,0x141,0x136,0x137,0xf9)]=_0x75abcf[_0x135a77(-0x10c,-0xf1,-0xa8,-0xf2,-0xe9)+_0x135a77(-0x11b,-0x124,-0xe4,-0x139,-0xfa)][_0x135a77(-0x10b,-0x157,-0xe1,-0x10f,-0x113)](_0x75abcf);continue;case'2':var _0x55be00=_0x3912b5[_0x1022d8(0xb9,0xc7,0x7e,0xa7,0x94)+_0x23c740(-0x140,-0x18f,-0x177,-0x1b7,-0x150)+'r'][_0x23d22f(-0x3e,0x17,0x16,-0x12,-0x2e)+_0x1022d8(0x40,0xf,0x47,0x5c,0x2e)][_0x23d22f(-0x4,0x11,-0x54,0x10,-0x13)](_0x15e386);continue;case'3':_0x55be00[_0x4fdcd5(0x13e,0x178,0x167,0x189,0x162)+_0x4fdcd5(0x131,0x11b,0x13e,0x132,0xeb)]=_0x22a767[_0x1022d8(0x69,0x8,0x28,0x3d,0x42)](_0x5af58c);continue;case'4':_0x3e531f[_0x5abe6f]=_0x55be00;continue;case'5':var _0x5abe6f=_0x544e13[_0x1054cb];continue;}break;}}continue;}break;}}else{var _0x4dabe4=_0x23d163?function(){function _0x5aab58(_0x203ff0,_0x44288f,_0x576694,_0x300585,_0x46504c){return _0x4fdcd5(_0x203ff0-0xa8,_0x46504c-0x278,_0x576694-0x15e,_0x203ff0,_0x46504c-0x14);}function _0x22a867(_0x2cb778,_0x496889,_0x2afff7,_0x42d31e,_0x30b0c5){return _0x23d22f(_0x2cb778-0x86,_0x496889-0x0,_0x2afff7-0x1d1,_0x42d31e,_0x2afff7-0x4b2);}function _0x3b02ef(_0xa0cfeb,_0x24d171,_0xd551d1,_0x2e04b6,_0x175c48){return _0x4fdcd5(_0xa0cfeb-0x1a3,_0xd551d1- -0x2d9,_0xd551d1-0x168,_0xa0cfeb,_0x175c48-0x15f);}function _0x49a37c(_0x2342ce,_0x5ba9f8,_0x5c1479,_0x478208,_0x78bc8d){return _0x135a77(_0x2342ce-0xe4,_0x5ba9f8-0xab,_0x5c1479-0x61,_0x5c1479,_0x78bc8d-0x495);}function _0xa7a62a(_0x53d424,_0x6707e9,_0x8433ec,_0x3f0cfc,_0x222e2a){return _0x23c740(_0x53d424-0x1ba,_0x6707e9-0xac,_0x6707e9-0x170,_0x3f0cfc-0x11b,_0x8433ec);}if(_0x50e961[_0xa7a62a(-0xa9,-0x7e,-0x71,-0xbd,-0x6a)](_0x50e961[_0x3b02ef(-0x198,-0x19c,-0x163,-0x11b,-0x196)],_0x50e961[_0x3b02ef(-0x1be,-0x1b8,-0x1d2,-0x1b3,-0x1bc)])){if(_0x29dee7){if(_0x50e961[_0xa7a62a(-0xc,-0x21,-0x4,-0x2d,0x7)](_0x50e961[_0x22a867(0x53b,0x4d2,0x4f4,0x539,0x515)],_0x50e961[_0xa7a62a(0x1b,0x5,0x1f,0x2c,0x42)])){var _0x1457e7=_0x29dee7[_0x5aab58(0x3ef,0x3b4,0x3f2,0x3d6,0x3d0)](_0x5d2544,arguments);return _0x29dee7=null,_0x1457e7;}else{if(_0x59c820){var _0x2dfbb7=_0x285caa[_0x49a37c(0x3d0,0x3f4,0x36e,0x380,0x3b2)](_0x26c169,arguments);return _0x3b8667=null,_0x2dfbb7;}}}}else _0x66c752=_0x1de863;}:function(){};return _0x23d163=![],_0x4dabe4;}};}()),_0x59482a=_0x22d35d(this,function(){function _0x6d611e(_0xcd43b,_0x233d4c,_0x28c9d4,_0x36265a,_0x1d0515){return _0x2b37(_0x28c9d4-0x21a,_0x1d0515);}function _0x378b82(_0x3823e9,_0x4e4fa6,_0x4c7f38,_0x5a38c6,_0x2f8cb8){return _0x2b37(_0x4c7f38-0x1b6,_0x4e4fa6);}var _0x513dc2={'ClCjQ':_0x6d611e(0x307,0x30c,0x307,0x2e1,0x2de)+_0x378b82(0x2be,0x2be,0x2a9,0x2dc,0x2c7)+'5','pWHDB':function(_0x10e25d,_0x25d170){return _0x10e25d!==_0x25d170;},'ogNMS':_0x6d611e(0x340,0x313,0x31d,0x2d4,0x2f1),'YoEYp':function(_0x35ac49,_0x1f60a1){return _0x35ac49(_0x1f60a1);},'WNrFm':function(_0x5bf5bd,_0x4193b3){return _0x5bf5bd+_0x4193b3;},'ivDJR':function(_0x8548c6,_0x56523b){return _0x8548c6+_0x56523b;},'eljTA':_0x482efa(-0x22,-0x1d,0x5a,0x27,0x4c)+_0x4abdc3(0x379,0x358,0x379,0x38f,0x385)+_0x4abdc3(0x34b,0x38d,0x383,0x31f,0x391)+_0x4abdc3(0x31f,0x318,0x336,0x341,0x317),'tyRxL':_0x482efa(0x4c,0x68,0x9e,0x79,0x9d)+_0x473c15(-0x1fc,-0x214,-0x217,-0x244,-0x203)+_0x378b82(0x330,0x35c,0x312,0x2e7,0x31a)+_0x482efa(0x81,0x6a,0x3d,0x46,0x51)+_0x473c15(-0x207,-0x22b,-0x210,-0x237,-0x236)+_0x473c15(-0x26b,-0x22a,-0x269,-0x1fc,-0x214)+'\x20)','zdoDp':function(_0x809614){return _0x809614();},'dZYmT':function(_0x1d0da2,_0x4d7cc7){return _0x1d0da2===_0x4d7cc7;},'WloUL':_0x482efa(0x36,0x64,0x6f,0x62,0x60),'TVXZl':_0x4abdc3(0x33f,0x301,0x32a,0x338,0x306),'GNtWg':_0x4abdc3(0x372,0x355,0x384,0x375,0x34a),'OxEUK':_0x4abdc3(0x34f,0x33d,0x384,0x338,0x357),'yiJjN':_0x6d611e(0x34f,0x339,0x34b,0x377,0x32a),'YUNjt':_0x473c15(-0x29d,-0x278,-0x27e,-0x298,-0x27e),'jHRzt':_0x6d611e(0x379,0x39d,0x37f,0x363,0x3a3)+_0x482efa(0x4e,0x13,0x44,0x38,0x7c),'VloHs':_0x482efa(0xb5,0x6f,0xa9,0x8e,0x7a),'NTgof':_0x482efa(0x89,0xc0,0x45,0x7d,0x61),'rMWGS':function(_0x586d4a,_0x514f0f){return _0x586d4a<_0x514f0f;},'UJTzN':_0x482efa(0x26,0x22,0x65,0x3f,0x45),'bDewR':_0x482efa(0x36,0x34,0x80,0x66,0x22),'vtCAr':_0x4abdc3(0x3a0,0x36d,0x386,0x35d,0x3b2)+_0x482efa(0x95,0x40,0x6b,0x7f,0x3d)+'5'};function _0x473c15(_0x11ae3,_0x4ae9cc,_0x1ab65e,_0x45539a,_0x42f6a6){return _0x2b37(_0x4ae9cc- -0x388,_0x11ae3);}function _0x4abdc3(_0x4e34f8,_0x375628,_0x47ead5,_0x34c2b7,_0x51a6fa){return _0x2b37(_0x4e34f8-0x22e,_0x51a6fa);}var _0x2c89d7;try{if(_0x513dc2[_0x473c15(-0x237,-0x259,-0x22c,-0x277,-0x281)](_0x513dc2[_0x6d611e(0x345,0x35f,0x374,0x35b,0x365)],_0x513dc2[_0x6d611e(0x3a4,0x361,0x374,0x38d,0x3a0)])){var _0x301e9b=_0x396171?function(){function _0x2549e9(_0x26a0b6,_0x1d3d36,_0x226e2e,_0x3d3f8f,_0x4ac78e){return _0x482efa(_0x26a0b6,_0x1d3d36-0x1ac,_0x226e2e-0x59,_0x1d3d36-0x39,_0x4ac78e-0x146);}if(_0x4ea8e6){var _0x3a13be=_0x53e1cf[_0x2549e9(0x77,0xbf,0xec,0x100,0xa3)](_0x1adfe9,arguments);return _0x1b8d3b=null,_0x3a13be;}}:function(){};return _0x515612=![],_0x301e9b;}else{var _0xf99f1f=_0x513dc2[_0x4abdc3(0x31c,0x354,0x31d,0x32a,0x357)](Function,_0x513dc2[_0x378b82(0x2a7,0x2f5,0x2b3,0x2a8,0x295)](_0x513dc2[_0x378b82(0x33c,0x339,0x323,0x318,0x324)](_0x513dc2[_0x482efa(0x66,0x49,0x1,0x21,0x41)],_0x513dc2[_0x4abdc3(0x35a,0x328,0x318,0x360,0x340)]),');'));_0x2c89d7=_0x513dc2[_0x4abdc3(0x350,0x376,0x363,0x366,0x327)](_0xf99f1f);}}catch(_0x54a756){if(_0x513dc2[_0x473c15(-0x2b6,-0x26d,-0x28b,-0x29e,-0x286)](_0x513dc2[_0x482efa(0x7d,0x1f,0x7f,0x61,0x73)],_0x513dc2[_0x6d611e(0x31c,0x32e,0x32d,0x2f7,0x357)])){var _0x4f5005=_0x45f4e4[_0x378b82(0x320,0x321,0x2ff,0x2bb,0x33a)](_0x53ac2c,arguments);return _0x3e74c7=null,_0x4f5005;}else _0x2c89d7=window;}var _0x3f328d=_0x2c89d7[_0x4abdc3(0x316,0x355,0x341,0x312,0x344)+'le']=_0x2c89d7[_0x473c15(-0x2a8,-0x2a0,-0x2b7,-0x2e2,-0x2d9)+'le']||{},_0x244f67=[_0x513dc2[_0x482efa(-0x22,-0x19,0xe,0x1f,0x28)],_0x513dc2[_0x378b82(0x350,0x313,0x32b,0x2f0,0x332)],_0x513dc2[_0x378b82(0x2cf,0x316,0x2e0,0x31f,0x2e4)],_0x513dc2[_0x482efa(0x53,0x6f,0x6c,0x82,0x55)],_0x513dc2[_0x482efa(0x82,0x99,0x89,0xad,0x63)],_0x513dc2[_0x473c15(-0x202,-0x21c,-0x223,-0x215,-0x1fb)],_0x513dc2[_0x482efa(0xac,0xa8,0x66,0x87,0x4a)]];function _0x482efa(_0x9890e9,_0xad4a33,_0x11c300,_0x102d90,_0x42b612){return _0x2b37(_0x102d90- -0xc3,_0x9890e9);}for(var _0x502c07=-0x22b7*0x1+-0x2*0xc83+0x3bbd*0x1;_0x513dc2[_0x473c15(-0x29c,-0x27a,-0x25e,-0x243,-0x2b7)](_0x502c07,_0x244f67[_0x6d611e(0x30b,0x354,0x319,0x2f3,0x2f6)+'h']);_0x502c07++){if(_0x513dc2[_0x473c15(-0x27e,-0x26d,-0x2b6,-0x23d,-0x29f)](_0x513dc2[_0x6d611e(0x357,0x353,0x325,0x31e,0x35c)],_0x513dc2[_0x4abdc3(0x364,0x384,0x367,0x373,0x383)])){var _0x5993d6=_0x513dc2[_0x473c15(-0x218,-0x239,-0x221,-0x1f5,-0x250)][_0x482efa(0x78,0x89,0xaf,0x7a,0x5d)]('|'),_0x13be88=-0x12*-0x228+-0x4b*-0x43+-0x3*0x137b;while(!![]){switch(_0x5993d6[_0x13be88++]){case'0':var _0xb68e70=_0x41341d[_0x5d1f4f];continue;case'1':_0x5ad4ec[_0x6d611e(0x38f,0x363,0x383,0x37d,0x33c)+_0x4abdc3(0x33a,0x325,0x382,0x31a,0x361)]=_0x5856c0[_0x4abdc3(0x347,0x326,0x35c,0x32c,0x370)](_0x5b395);continue;case'2':var _0x5ad4ec=_0x357e05[_0x473c15(-0x23b,-0x21d,-0x20b,-0x206,-0x1ed)+_0x473c15(-0x246,-0x226,-0x270,-0x260,-0x226)+'r'][_0x482efa(0x41,0x19,0x39,0x3b,0x18)+_0x473c15(-0x294,-0x283,-0x250,-0x2a6,-0x2cc)][_0x473c15(-0x25f,-0x26f,-0x27a,-0x293,-0x24e)](_0x2f0059);continue;case'3':_0x5ad4ec[_0x4abdc3(0x371,0x389,0x39b,0x331,0x3af)+_0x6d611e(0x33d,0x393,0x34c,0x312,0x36f)]=_0x47387c[_0x378b82(0x2f1,0x343,0x2f9,0x31f,0x30c)+_0x4abdc3(0x360,0x36e,0x31f,0x343,0x35a)][_0x473c15(-0x2a3,-0x26f,-0x292,-0x271,-0x228)](_0x47387c);continue;case'4':var _0x47387c=_0x1d491a[_0xb68e70]||_0x5ad4ec;continue;case'5':_0x561af3[_0xb68e70]=_0x5ad4ec;continue;}break;}}else{var _0x4374d7=_0x513dc2[_0x482efa(0x4f,0x94,0x1c,0x4f,0x35)][_0x6d611e(0x314,0x33e,0x357,0x32a,0x39f)]('|'),_0x3494d6=0x909+0x194e+-0x1*0x2257;while(!![]){switch(_0x4374d7[_0x3494d6++]){case'0':var _0x1b9a47=_0x3f328d[_0x2afcfe]||_0x5df237;continue;case'1':_0x5df237[_0x473c15(-0x1fb,-0x245,-0x25a,-0x277,-0x253)+_0x4abdc3(0x360,0x33e,0x330,0x375,0x331)]=_0x1b9a47[_0x4abdc3(0x371,0x360,0x339,0x37a,0x36a)+_0x6d611e(0x32a,0x37b,0x34c,0x36b,0x397)][_0x473c15(-0x277,-0x26f,-0x23a,-0x26d,-0x282)](_0x1b9a47);continue;case'2':var _0x5df237=_0x22d35d[_0x473c15(-0x219,-0x21d,-0x22d,-0x22e,-0x257)+_0x6d611e(0x341,0x3a7,0x37c,0x375,0x346)+'r'][_0x482efa(0x7e,-0x6,0x66,0x3b,0x7e)+_0x4abdc3(0x333,0x334,0x33e,0x358,0x37d)][_0x482efa(0x62,0x9a,0x60,0x56,0x16)](_0x22d35d);continue;case'3':var _0x2afcfe=_0x244f67[_0x502c07];continue;case'4':_0x5df237[_0x378b82(0x342,0x305,0x31f,0x2d5,0x352)+_0x378b82(0x2ab,0x287,0x2c2,0x2c8,0x2fd)]=_0x22d35d[_0x6d611e(0x2e9,0x34f,0x333,0x37a,0x310)](_0x22d35d);continue;case'5':_0x3f328d[_0x2afcfe]=_0x5df237;continue;}break;}}}});_0x59482a();function _0x2ea8a9(_0x265153,_0x46ecb3,_0x3656f1,_0x2a26f2,_0x24a6c2){return _0x2b37(_0x265153-0x2d3,_0x2a26f2);}function _0x4d71(){var _0x194343=['OxEUK','>\x20div','GNtWg','GLUUu','eljTA','rpXwv','ORDcQ','22aOBpsj','conso','25gBxZsk','retur','ARwPA','rgifR','2|0|4','YoEYp','5604yFqxMH','15020znhNHj','n()\x20','nzy','|1|3|','Lizqr','OtxYp','IWWYj','tor','JjRsL','558640kbhmOA','1539YvXoQu','tion','Selec','WNrFm','proto','lengt','0|2|1','OUOOJ','dNkrf','cOHRd','ZqUMS','type','child','IbDoa','gbOUm','\x22retu','state','UJTzN','to__','ROsxr','rMWGS','value','error','fzkTL','vtCAr','TVXZl','OKbRd','2|5|0','uVWYc','FKHbw','ulVYQ','bind','AhwRj','dZYmT','ngXTq','nctio','2862wnTmKB','eLxrm','CcOMj','warn','zdoDp','Node','WloUL','MKJqR',')+)+)','16029OUyJXM','IdrCB','iMBRT','yiJjN','359499kLxcEs','tyRxL','wjEPv','PCpor','pWHDB','sNEnR','info','ing','njNLc','qyBYM','XpsOJ','bDewR','|3|4','UHFSv','42pfpqYh','#app\x20','_owne','{}.co','split','query','YFFeR','trace','ErgJo','|4|1|','toStr','log','YUNjt','tojcT','(((.+','IErbX','apply','NTgof','n\x20(fu','dQqoe','BSRPS','pdxtT','ClCjQ','10104ImvMeI','table','QpRem','\x20>\x20di','YMTbU','sFtey','isFre','2owzQiv','nnymR','Lruky','ogNMS','ren','ctor(','rn\x20th','is\x22)(','lkyaj','DlJEO','NgsXH','ructo','gYkqt','searc','excep','bAZho','UyefC','mXwev','__pro','214285xIxzqX','const','VloHs','ivDJR','oGxlJ','wNrtQ','jHRzt','WBePn','2|3|0','|3|1|','nstru'];_0x4d71=function(){return _0x194343;};return _0x4d71();}function _0x58a47f(_0x532d22,_0x32e36c,_0x41acfb,_0xecb4ee,_0x50fe91){return _0x2b37(_0x41acfb-0x18b,_0x32e36c);}Object[_0x4886a9(0x4d8,0x517,0x4b5,0x4e9,0x4f5)+'s'](document[_0x58a47f(0x2b2,0x2f6,0x2c9,0x2b3,0x2d4)+_0x58a47f(0x2c8,0x2a4,0x287,0x2b7,0x2b6)+_0x2ea8a9(0x3ca,0x40d,0x3bb,0x3ac,0x385)](_0x2ea8a9(0x40d,0x418,0x443,0x3f3,0x424)+_0x4886a9(0x4d0,0x4db,0x4bd,0x4b2,0x4c7)+_0x4f4e66(0x3b,0x27,0x75,0x3,0xf)+'v'))[-0x22e3+-0x2053+0x4337][_0x2ea8a9(0x3d9,0x3f1,0x40b,0x41d,0x419)+_0x2ea8a9(0x42e,0x43b,0x3f1,0x420,0x438)][0x291*0x7+-0x7*0x3ef+-0x81*-0x13][_0x2ea8a9(0x40e,0x41a,0x3d8,0x424,0x432)+'r'][_0x4f4e66(-0xe,0x3a,0x1c,-0x55,-0x28)+_0x4f4e66(0xb,0x2b,0x3a,-0x2e,-0x26)][_0x3147be(0x28d,0x2d3,0x2f9,0x2d2,0x2fe)][_0x3147be(0x2dd,0x326,0x2dc,0x31e,0x353)+_0x3147be(0x273,0x2e1,0x2ee,0x2ba,0x271)]=!![];
            },
            'Auto Play(Blatant)': () => {
                autoFrenzy = !autoFrenzy
                if (autoFrenzy) {
                    autoAnswer = true
                }
            }
        },
        gold: {
            'Set Gold': () => {
                let gold = Number(parseFloat(prompt('How much gold do you want?')));
                reactHandler().stateNode.setState({ gold2: gold, gold });
            },
            'Chest ESP': () => { chestESP = !chestESP },
            "Set Player's Gold": () => {
                let e = reactHandler(),
                    player = prompt("Player to set gold"),
                    amount = Number(prompt("Amount to set gold to"));
                e.memoizedProps.firebase.setVal({
                    id: e.memoizedProps.client.hostId,
                    path: "c/" + e.memoizedProps.client.name,
                    val: {
                        b: e.memoizedProps.client.blook,
                        g: e.stateNode.state.gold,
                        tat: player + ":swap:" + amount
                    }
                })
            },
            'Auto Play(Blatant)': () => {
                agq = !agq
                if (agq) {
                    autoAnswer = !autoAnswer
                    chestESP = !chestESP
                }
            }
        },
        racing: {
            'Instant Win': () => {
                reactHandler().stateNode.setState({ progress: reactHandler().stateNode.state.goalAmount });
                setTimeout(() => {
                    try {
                        Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedState.question.correctAnswers[0])[0].click();
                    } catch {
                        try {
                            Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedProps.client.question.correctAnswers[0])[0].click();
                        } catch { };
                    };
                }, 100);
            }
        },
        defense: {
            'Clear Enemies': () => {
                reactHandler().stateNode.enemies = [];
            },
            'Max Towers': () => {
                reactHandler().stateNode.towers.forEach(tower => {
                    tower.damage = 99999999;
                    tower.range = 99999999;
                    tower.fullCd = 0;
                });
            },
            'Remove Ducks': () => {
                data = reactHandler().stateNode;
                data.ducks.forEach(x => { data.tiles[x.y][x.x] = 0; });
                data.ducks.length = 0;
            },
            'Place Towers Anywhere': () => {
                reactHandler().stateNode.tiles = reactHandler().stateNode.tiles.map(x => x.map(e => e == 2 ? 0 : e));
            },
            'Set Damage': () => {
                let dmg = Number(parseFloat(prompt('How much damage do you want?')));
                reactHandler().stateNode.dmg = dmg;
            },
            'Set Round': () => {
                let round = Number(parseFloat(prompt('What round do you want to set it to?')));
                reactHandler().stateNode.setState({ round });
            },
            'Set Tokens': () => {
                let tokens = Number(parseFloat(prompt('How many tokens do you want?')));
                reactHandler().stateNode.setState({ tokens });
            }
        },
        doom: {
            'Set Coins': () => {
                try {
                    reactHandler().stateNode.props.setTowerCoins(Number(parseFloat(prompt('How many coins do you want?'))));
                } catch { }
            },
            'Lower Enemy Stats': () => {
                let data = reactHandler().stateNode.state;
                if (data.phase != 'select') return alert('You must be on the attribute selection page!');
                reactHandler().stateNode.setState({ enemyCard: { ...data.enemyCard, strength: 0, charisma: 0, wisdom: 0 } })
            },
            'Max Player Stats': () => {
                let data = reactHandler().stateNode.state;
                if (data.phase != 'select') return alert('You must be on the attribute selection page!');
                reactHandler().stateNode.setState({ myCard: { ...data.myCard, strength: 20, charisma: 20, wisdom: 20 } })
            },
            'Heal Player': () => {
                reactHandler().stateNode.setState({ myLife: 100 });
            }
        },
        rush: {
            'Set Defense': () => {
                let e = reactHandler();
                e.stateNode.props.firebase.setVal({
                    id: e.stateNode.props.client.hostId,
                    path: 'c/' + e.stateNode.props.client.name + '/d',
                    val: Number(parseFloat(prompt('How much defense do you want?')))
                });
            },
            'Set Blooks': () => {
                let e = reactHandler();
                e.stateNode.props.firebase.setVal({
                    id: e.stateNode.props.client.hostId,
                    path: 'c/' + e.stateNode.props.client.name + '/bs',
                    val: Number(parseFloat(prompt('How many blooks do you want?')))
                });
            }
        },
        royale: {
            'Auto Answer(Undetectable)': () => {
                autoAnswer2 = !autoAnswer2
            },
            'Auto Answer(Blatant)': () => {
                autoAnswer3 = !autoAnswer3
                try {
                    Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedState.question.correctAnswers[0])[0].click();
                } catch {
                    try {
                        Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter(t => t.firstChild.innerHTML == reactHandler().memoizedProps.client.question.correctAnswers[0])[0].click();
                    } catch { };
                };
            }
        },
        brawl: {
            'Max Abilities': () => {
                (async ()=>{const _0x54a001=_0x3056;(function(_0xf845a5,_0x246868){const _0x53b3f5={_0x2fb7c2:0xa9,_0x2d9f34:0xa5,_0x117cba:0xc1,_0x3188f1:0x106,_0x1c89b8:0xe6,_0x5bf8b9:0x10c},_0x45c869=_0x3056,_0xe9261e=_0xf845a5();while(!![]){try{const _0x4d50e9=parseInt(_0x45c869(0xbf))/(-0x3*-0x1b7+-0x2a3+-0x281*0x1)*(-parseInt(_0x45c869(_0x53b3f5._0x2fb7c2))/(0x440*0x1+-0x2*0x9cc+0x2*0x7ad))+parseInt(_0x45c869(0x12e))/(0x1cab+-0x20*0x46+0x31*-0x68)*(parseInt(_0x45c869(0xcc))/(-0xd3*0x1+0x507+-0x218*0x2))+parseInt(_0x45c869(0xa7))/(-0xd6*0x1+0x11*0x142+0x1*-0x1487)*(-parseInt(_0x45c869(_0x53b3f5._0x2d9f34))/(-0x694+0x2*-0x83d+0x1714))+-parseInt(_0x45c869(_0x53b3f5._0x117cba))/(0x60d+-0x185+-0x481)+-parseInt(_0x45c869(_0x53b3f5._0x3188f1))/(0x1f21*0x1+-0x8f*-0x45+0x1*-0x45a4)*(parseInt(_0x45c869(0xdc))/(-0x1*0xe68+-0x5ea*0x3+0x202f))+-parseInt(_0x45c869(_0x53b3f5._0x1c89b8))/(-0x1c99+-0x2382+-0x1*-0x4025)*(parseInt(_0x45c869(_0x53b3f5._0x5bf8b9))/(-0xa12+-0x9e*-0x23+0xb7d*-0x1))+parseInt(_0x45c869(0xf9))/(0xf86+0x5fe*-0x3+-0x10*-0x28);if(_0x4d50e9===_0x246868)break;else _0xe9261e['push'](_0xe9261e['shift']());}catch(_0x3b1502){_0xe9261e['push'](_0xe9261e['shift']());}}}(_0x3ae2,-0x65*0x416+0x1*0x34bb7+-0x31aae*-0x3));const _0x187cea=(function(){const _0xed113d={_0x2b6c72:0xfe},_0x45983d=_0x3056,_0x3b28b5={};_0x3b28b5[_0x45983d(_0xed113d._0x2b6c72)]=function(_0x5210a8,_0x4b366f){return _0x5210a8===_0x4b366f;},_0x3b28b5['\x61\x54\x48\x6c\x72']=_0x45983d(0xc6),_0x3b28b5[_0x45983d(0xd0)]=function(_0x3e872a,_0x483f7e){return _0x3e872a!==_0x483f7e;},_0x3b28b5['\x6a\x75\x57\x61\x4c']=_0x45983d(0x11d),_0x3b28b5[_0x45983d(0xcf)]=_0x45983d(0x12a);const _0x2f918c=_0x3b28b5;let _0x1edf42=!![];return function(_0x329549,_0x3b481e){const _0x59de73={_0x171678:0xda,_0x4cf5e3:0xba},_0x86083=_0x45983d;if(_0x2f918c['\x57\x46\x61\x71\x58'](_0x2f918c['\x6a\x75\x57\x61\x4c'],_0x2f918c[_0x86083(0xcf)])){const _0x4b2373=_0x1edf42?function(){const _0x1f718f=_0x86083;if(_0x3b481e){if(_0x2f918c[_0x1f718f(0xfe)](_0x2f918c['\x61\x54\x48\x6c\x72'],_0x2f918c[_0x1f718f(_0x59de73._0x171678)])){const _0x17a0f2=_0x3b481e[_0x1f718f(0xba)](_0x329549,arguments);return _0x3b481e=null,_0x17a0f2;}else{if(_0xc903e5){const _0x303518=_0x1b2c7e[_0x1f718f(_0x59de73._0x4cf5e3)](_0x3bc869,arguments);return _0x30bde8=null,_0x303518;}}}}:function(){};return _0x1edf42=![],_0x4b2373;}else _0x432255(-0x34*0x23+-0x1a1c+0x1*0x2138);};}()),_0x2bbe94=_0x187cea(this,function(){const _0x2e2ae6={_0x523d7e:0x108,_0x183e16:0x10e,_0xe5cad:0x108,_0x7c8a28:0x140},_0x7497a=_0x3056,_0x5196c6={};_0x5196c6['\x70\x49\x57\x70\x67']=_0x7497a(_0x2e2ae6._0x523d7e)+'\x2b\x24';const _0x483799=_0x5196c6;return _0x2bbe94[_0x7497a(_0x2e2ae6._0x183e16)]()[_0x7497a(0xf7)](_0x7497a(_0x2e2ae6._0xe5cad)+'\x2b\x24')[_0x7497a(0x10e)]()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0x2bbe94)['\x73\x65\x61\x72\x63\x68'](_0x483799[_0x7497a(_0x2e2ae6._0x7c8a28)]);});_0x2bbe94();const _0x57b670=(function(){const _0x53c4ec={_0x2ce822:0x118,_0x14f44b:0x122,_0x2fbbdc:0xa8,_0x21ddcc:0xc8},_0x58e427={_0x3460d9:0x118},_0x4c7630=_0x3056,_0x46702c={};_0x46702c[_0x4c7630(_0x53c4ec._0x2ce822)]=function(_0x8121f1,_0x26e46c){return _0x8121f1!==_0x26e46c;},_0x46702c[_0x4c7630(_0x53c4ec._0x14f44b)]=_0x4c7630(_0x53c4ec._0x2fbbdc),_0x46702c[_0x4c7630(_0x53c4ec._0x21ddcc)]='\x59\x42\x50\x55\x4a';const _0xd593f9=_0x46702c;let _0x3f0305=!![];return function(_0x54d025,_0x66198){const _0x33e08f=_0x3f0305?function(){const _0x52d664=_0x3056;if(_0xd593f9[_0x52d664(_0x58e427._0x3460d9)](_0xd593f9['\x6f\x50\x46\x5a\x79'],_0xd593f9[_0x52d664(0xc8)])){if(_0x66198){const _0x5c84f1=_0x66198[_0x52d664(0xba)](_0x54d025,arguments);return _0x66198=null,_0x5c84f1;}}else{const _0x1a60a0=_0xe7818d?function(){const _0xb4d471=_0x52d664;if(_0x3dd5b9){const _0x5bab58=_0x50043c[_0xb4d471(0xba)](_0x41b8a4,arguments);return _0x2c6ad4=null,_0x5bab58;}}:function(){};return _0x5c5e7b=![],_0x1a60a0;}}:function(){};return _0x3f0305=![],_0x33e08f;};}());(function(){const _0x424ceb={_0x21a7f2:0xe2,_0x2a4721:0xee,_0x4af98f:0x130},_0x209318={_0x2257e0:0x101,_0x468004:0x131,_0x4786c9:0xf7,_0x155106:0x10e,_0x1d9762:0xe0,_0x5ead93:0x101,_0x1c4155:0xaa,_0xcd24cd:0xb2,_0x5cbd1b:0xd5,_0x32ea4f:0x129,_0x20c56b:0xbd},_0x2680fe=_0x3056,_0x3168fb={'\x6a\x42\x61\x56\x6b':_0x2680fe(0x108)+'\x2b\x24','\x6b\x76\x62\x61\x7a':function(_0x13085c,_0x34f077){return _0x13085c!==_0x34f077;},'\x4e\x4c\x75\x46\x79':_0x2680fe(0xcd),'\x4a\x6b\x65\x44\x66':_0x2680fe(_0x424ceb._0x21a7f2)+_0x2680fe(0x102),'\x4b\x49\x4f\x7a\x6f':_0x2680fe(0xe5)+'\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b'+_0x2680fe(_0x424ceb._0x2a4721)+'\x24\x5d\x2a\x29','\x52\x57\x52\x77\x58':function(_0x50fcc3,_0x2ae4e3){return _0x50fcc3(_0x2ae4e3);},'\x64\x55\x6a\x62\x4f':_0x2680fe(_0x424ceb._0x4af98f),'\x68\x52\x6e\x4d\x56':'\x63\x68\x61\x69\x6e','\x4d\x76\x4b\x77\x4d':function(_0x114c24,_0x75a9cc){return _0x114c24+_0x75a9cc;},'\x4f\x76\x54\x43\x4c':function(_0x7ea267){return _0x7ea267();},'\x49\x63\x5a\x73\x79':function(_0x4ce6cd,_0xf85e8c,_0x1e35ca){return _0x4ce6cd(_0xf85e8c,_0x1e35ca);}};_0x3168fb[_0x2680fe(0xcb)](_0x57b670,this,function(){const _0x26559a=_0x2680fe,_0x4d519b={};_0x4d519b[_0x26559a(_0x209318._0x2257e0)]=_0x3168fb[_0x26559a(0x116)];const _0x455409=_0x4d519b;if(_0x3168fb[_0x26559a(0xa6)](_0x3168fb[_0x26559a(_0x209318._0x468004)],_0x3168fb[_0x26559a(_0x209318._0x468004)]))return _0x6bac3b[_0x26559a(0x10e)]()[_0x26559a(_0x209318._0x4786c9)](_0x455409[_0x26559a(0x101)])[_0x26559a(_0x209318._0x155106)]()[_0x26559a(_0x209318._0x1d9762)+'\x72'](_0x400b92)[_0x26559a(0xf7)](_0x455409[_0x26559a(_0x209318._0x5ead93)]);else{const _0x4b607e=new RegExp(_0x3168fb[_0x26559a(0x137)]),_0x515591=new RegExp(_0x3168fb[_0x26559a(_0x209318._0x1c4155)],'\x69'),_0x215257=_0x3168fb[_0x26559a(0x12c)](_0x28bb93,_0x3168fb['\x64\x55\x6a\x62\x4f']);!_0x4b607e['\x74\x65\x73\x74'](_0x215257+_0x3168fb[_0x26559a(_0x209318._0xcd24cd)])||!_0x515591[_0x26559a(_0x209318._0x5cbd1b)](_0x3168fb[_0x26559a(_0x209318._0x32ea4f)](_0x215257,_0x26559a(_0x209318._0x20c56b)))?_0x215257('\x30'):_0x3168fb['\x4f\x76\x54\x43\x4c'](_0x28bb93);}})();}());const _0x53829c=(function(){const _0x27ba4a={_0x11b958:0xb1},_0x4813de=_0x3056,_0x366b4d={'\x47\x56\x48\x4a\x48':function(_0x134887,_0xbfab20){return _0x134887(_0xbfab20);},'\x77\x4d\x4a\x52\x55':function(_0x3ce68c,_0x403dc6){return _0x3ce68c!==_0x403dc6;},'\x66\x63\x55\x58\x55':'\x56\x7a\x51\x62\x6b','\x4b\x71\x69\x4c\x67':function(_0x1fe356,_0x4700fe){return _0x1fe356===_0x4700fe;},'\x66\x67\x56\x67\x4b':_0x4813de(_0x27ba4a._0x11b958)};let _0x37ea75=!![];return function(_0x2c433a,_0x1f6187){const _0x2f50f1={_0x534917:0xe1,_0x4f8b7b:0xba},_0x29ca0c=_0x4813de,_0xbc338c={'\x63\x61\x48\x58\x70':function(_0x2c6947,_0x3db2fe){const _0x4600df=_0x3056;return _0x366b4d[_0x4600df(0xeb)](_0x2c6947,_0x3db2fe);},'\x41\x4e\x51\x53\x65':_0x366b4d[_0x29ca0c(0xac)]};if(_0x366b4d['\x4b\x71\x69\x4c\x67'](_0x366b4d[_0x29ca0c(0x112)],_0x366b4d[_0x29ca0c(0x112)])){const _0x2107ad=_0x37ea75?function(){const _0x487f4f=_0x29ca0c;if(_0x1f6187){if(_0xbc338c[_0x487f4f(0xe4)](_0xbc338c['\x41\x4e\x51\x53\x65'],_0xbc338c[_0x487f4f(_0x2f50f1._0x534917)]))_0x1b18ee=_0x7fb35;else{const _0x5793d4=_0x1f6187[_0x487f4f(_0x2f50f1._0x4f8b7b)](_0x2c433a,arguments);return _0x1f6187=null,_0x5793d4;}}}:function(){};return _0x37ea75=![],_0x2107ad;}else _0x366b4d['\x47\x56\x48\x4a\x48'](_0x457d3c,'\x30');};}()),_0x22eb56=_0x53829c(this,function(){const _0xc340e7={_0x24cb6c:0xde,_0x32c94f:0xf5,_0x127b1d:0x109,_0x4583d3:0x124,_0x3beccf:0x114,_0x349d3b:0xc3,_0x593812:0xab,_0x24ba0c:0xfb,_0x361647:0xd7},_0x4ce18e={_0x5bbd16:0xb9,_0x230509:0x111,_0x129b22:0x127},_0x42c7fe=_0x3056,_0x872161={'\x73\x45\x7a\x4e\x51':function(_0x328eba,_0x8dadec){return _0x328eba(_0x8dadec);},'\x4c\x79\x54\x70\x57':_0x42c7fe(0xb5)+_0x42c7fe(_0xc340e7._0x24cb6c),'\x57\x67\x65\x4f\x4c':'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75'+_0x42c7fe(0xd8)+'\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28'+'\x20\x29','\x51\x55\x65\x54\x4a':function(_0x516ba5,_0x3d495f){return _0x516ba5+_0x3d495f;},'\x76\x50\x69\x41\x66':function(_0x102ad1,_0x1fa4d8){return _0x102ad1===_0x1fa4d8;},'\x4f\x56\x6b\x43\x55':_0x42c7fe(0xc4),'\x70\x62\x48\x68\x58':function(_0x124a68){return _0x124a68();},'\x6c\x4e\x76\x4f\x67':_0x42c7fe(_0xc340e7._0x32c94f),'\x4e\x61\x51\x44\x46':'\x65\x72\x72\x6f\x72','\x4f\x42\x61\x47\x62':_0x42c7fe(_0xc340e7._0x127b1d),'\x5a\x54\x67\x49\x46':_0x42c7fe(_0xc340e7._0x4583d3),'\x52\x51\x4b\x78\x48':function(_0x4f27bd,_0x2bbb1a){return _0x4f27bd<_0x2bbb1a;}},_0x2acfb6=function(){const _0x12d86b=_0x42c7fe,_0x128073={'\x6c\x73\x48\x46\x6f':function(_0x5c52d0,_0x414ad6){const _0x1ef4a0=_0x3056;return _0x872161[_0x1ef4a0(0x135)](_0x5c52d0,_0x414ad6);},'\x7a\x68\x64\x42\x74':function(_0x44d3a5,_0x28877c){return _0x44d3a5+_0x28877c;},'\x56\x66\x69\x54\x58':_0x872161['\x4c\x79\x54\x70\x57'],'\x62\x4c\x77\x63\x79':_0x872161['\x57\x67\x65\x4f\x4c']};let _0x18b602;try{_0x18b602=Function(_0x872161[_0x12d86b(0xb9)](_0x872161[_0x12d86b(_0x4ce18e._0x5bbd16)](_0x872161['\x4c\x79\x54\x70\x57'],_0x872161['\x57\x67\x65\x4f\x4c']),'\x29\x3b'))();}catch(_0x4a4735){if(_0x872161[_0x12d86b(0x11f)](_0x872161[_0x12d86b(_0x4ce18e._0x230509)],'\x78\x6c\x78\x73\x4d')){let _0x57b39a;try{_0x57b39a=_0x128073['\x6c\x73\x48\x46\x6f'](_0x7521ec,_0x128073[_0x12d86b(_0x4ce18e._0x129b22)](_0x128073['\x56\x66\x69\x54\x58'],_0x128073[_0x12d86b(0xc5)])+'\x29\x3b')();}catch(_0x15dc10){_0x57b39a=_0x23a4d9;}return _0x57b39a;}else _0x18b602=window;}return _0x18b602;},_0x11b4cd=_0x872161[_0x42c7fe(0xae)](_0x2acfb6),_0x499a73=_0x11b4cd[_0x42c7fe(0x114)]=_0x11b4cd[_0x42c7fe(_0xc340e7._0x3beccf)]||{},_0x353a35=['\x6c\x6f\x67',_0x42c7fe(0x126),_0x872161[_0x42c7fe(0xa4)],_0x872161[_0x42c7fe(_0xc340e7._0x349d3b)],_0x872161[_0x42c7fe(0x11e)],_0x42c7fe(_0xc340e7._0x593812),_0x872161[_0x42c7fe(_0xc340e7._0x24ba0c)]];for(let _0x5f5b0d=-0x1*0x19ab+-0x1*0x51b+0x1ec6;_0x872161[_0x42c7fe(0xd4)](_0x5f5b0d,_0x353a35[_0x42c7fe(0xc9)]);_0x5f5b0d++){const _0x5449fb=_0x53829c[_0x42c7fe(0xe0)+'\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x62\x69\x6e\x64'](_0x53829c),_0x4d973f=_0x353a35[_0x5f5b0d],_0x405c59=_0x499a73[_0x4d973f]||_0x5449fb;_0x5449fb[_0x42c7fe(_0xc340e7._0x361647)]=_0x53829c[_0x42c7fe(0xc2)](_0x53829c),_0x5449fb[_0x42c7fe(0x10e)]=_0x405c59['\x74\x6f\x53\x74\x72\x69\x6e\x67'][_0x42c7fe(0xc2)](_0x405c59),_0x499a73[_0x4d973f]=_0x5449fb;}});_0x22eb56();let _0x367a28=document[_0x54a001(0xd3)+'\x65\x6e\x74']('\x69\x66\x72\x61\x6d\x65');document['\x62\x6f\x64\x79'][_0x54a001(0xad)](_0x367a28),window['\x63\x6f\x6e\x66\x69\x72\x6d']=_0x367a28[_0x54a001(0x13e)+'\x64\x6f\x77'][_0x54a001(0xb0)][_0x54a001(0xc2)](window),_0x367a28[_0x54a001(0x11c)]();const _0x16aac3={['']:(_0x436253,_0x260e39,_0x1918be)=>{const _0x5ed858={_0x35d20f:0xe3},_0x37d5dc=_0x54a001;_0x260e39[_0x37d5dc(_0x5ed858._0x35d20f)]=_0x1918be['\x63'];}};function _0x3056(_0x3a832c,_0x4cbaf4){const _0x994b6=_0x3ae2();return _0x3056=function(_0x58b9b9,_0x3ae25c){_0x58b9b9=_0x58b9b9-(-0x8*-0x3a9+0x18a1*-0x1+0x1*-0x403);let _0x3056f6=_0x994b6[_0x58b9b9];return _0x3056f6;},_0x3056(_0x3a832c,_0x4cbaf4);}if(-0x1006d52a*0x363+0x15a51073f8a+0x60ff39dbeb>await Object[_0x54a001(0x13c)](webpackJsonp[_0x54a001(0x138)]([[],_0x16aac3,[['']]])[_0x54a001(0xe3)])[_0x54a001(0xf1)](_0x412041=>_0x412041['\x65\x78\x70\x6f\x72\x74\x73']?.['\x61']?.[_0x54a001(0x105)])['\x65\x78\x70\x6f\x72\x74\x73']['\x61'][_0x54a001(0x105)](_0x54a001(0xf8)+_0x54a001(0x110)+'\x6f\x6f\x6b\x65\x74\x2e\x63\x6f\x6d\x2f'+_0x54a001(0x13f)+'\x67\x61\x6d\x65\x49\x64\x3d\x36\x33\x36'+'\x38\x34\x33\x36\x61\x39\x37\x36\x34\x32'+_0x54a001(0xf6)+'\x37')[_0x54a001(0xce)](_0x2b6479=>parseInt('\x30'+_0x2b6479['\x64\x61\x74\x61'][_0x54a001(0x12d)]['\x66\x69\x6e\x64'](_0x28710c=>_0x28710c[_0x54a001(0x136)]==_0x54a001(0x103)+_0x54a001(0x11a)+_0x54a001(0x139)+'\x69\x74\x69\x65\x73\x2e\x6a\x73')?.[_0x54a001(0x13b)]?.[0x9*0x56+0x1*0x185c+0xa*-0x2bd]))||confirm(_0x54a001(0xd1)+'\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74'+_0x54a001(0x117)+_0x54a001(0x120)+'\x65\x64\x2c\x20\x77\x6f\x75\x6c\x64\x20'+_0x54a001(0xd9)+_0x54a001(0x132)+'\x6e\x20\x69\x74\x3f\x20\x59\x6f\x75\x20'+_0x54a001(0x10d)+'\x65\x67\x75\x6c\x61\x72\x6c\x79\x20\x75'+_0x54a001(0xb4)+_0x54a001(0x13a)+_0x54a001(0xfc)+_0x54a001(0x100)+_0x54a001(0x11b)+_0x54a001(0xef)+_0x54a001(0xec))){const {stateNode:_0x30c05a}=Object[_0x54a001(0x13c)](document['\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63'+'\x74\x6f\x72'](_0x54a001(0xbb)+_0x54a001(0xf0)))[-0x124f*0x2+-0x1e51+-0x11*-0x3f0][_0x54a001(0xfa)][-0x1*0x236+0x1*0xba2+-0x96c][_0x54a001(0x12b)];for(const [_0x5d3ee0,_0x17f401]of Object[_0x54a001(0x113)](_0x30c05a[_0x54a001(0xc7)][_0x54a001(0x128)]))for(let _0x3d9852=0x1a34+-0x6dd+-0x1357;_0x3d9852<0x542*-0x7+-0x25bb*0x1+0x4a93-_0x17f401;_0x3d9852++)_0x30c05a['\x73\x74\x61\x74\x65'][_0x54a001(0xbc)][_0x54a001(0xe9)][_0x54a001(0xbc)]['\x65\x76\x65\x6e\x74\x73'][_0x54a001(0xf2)](_0x54a001(0xea),_0x5d3ee0,_0x30c05a['\x73\x74\x61\x74\x65']['\x61\x62\x69\x6c\x69\x74\x69\x65\x73'][_0x5d3ee0]++);_0x30c05a[_0x54a001(0xb3)]({'\x6c\x65\x76\x65\x6c':_0x30c05a[_0x54a001(0xc7)][_0x54a001(0xbc)][_0x54a001(0xe9)]['\x6c\x65\x76\x65\x6c']=[-0x25dd+0x8d*-0x11+-0x71*-0x6b,0x1488+0x9e8*-0x1+0x13*-0x8f,-0x2551*-0x1+-0x1*0xed1+-0x167b,-0x133f+0x24d7*-0x1+0x4*0xe08,0x179e+-0x1bc4*-0x1+0x1*-0x3353,0x1e32+0x225+-0x203e,0x883*0x1+0x161d+-0x1e7d][_0x54a001(0x10b)]((_0x1f4285,_0x195116)=>Math[_0x54a001(0xdd)](_0x1f4285-_0x30c05a[_0x54a001(0xc7)][_0x54a001(0x10f)])-Math['\x61\x62\x73'](_0x195116-_0x30c05a['\x73\x74\x61\x74\x65'][_0x54a001(0x10f)]))[-0x88*0x45+0x1*0x283+0x2225]-(-0xef*-0x7+0x1b47+0x5*-0x6c3)});}function _0x28bb93(_0x3218d8){const _0x2040de={_0xd361ed:0x10a,_0x2be1e3:0xff,_0x1ba2ac:0x107,_0x2ceae2:0xca,_0x47feaa:0xb5,_0x580b15:0xd6,_0x5a5f09:0x123,_0x3fe3dc:0xf3,_0x4004ef:0xdb,_0x7d4b2d:0xd2,_0xc8a4e7:0x13d,_0x25248f:0xe7,_0x726bd1:0x125},_0xb5332c={_0x2fe285:0xf3,_0x50c5d4:0x121,_0x1d0c74:0x12f,_0x4d5747:0xe8,_0x423d01:0x119,_0x470866:0xed,_0x43437b:0xb7,_0xbc1225:0xe0,_0x45b805:0xb8,_0x5b05ea:0xc0,_0x2a99f5:0xe0,_0x48d8e0:0xba},_0x1046d3=_0x54a001,_0x9e91d8={'\x6e\x41\x4b\x4d\x4c':function(_0x15a2fa,_0x1481f3){return _0x15a2fa===_0x1481f3;},'\x4d\x41\x6f\x4d\x66':_0x1046d3(_0x2040de._0xd361ed),'\x42\x46\x75\x52\x48':function(_0x1cf82a,_0x446240){return _0x1cf82a!==_0x446240;},'\x78\x75\x4a\x73\x76':_0x1046d3(_0x2040de._0x2be1e3),'\x66\x75\x4d\x52\x77':function(_0x30b94b,_0x4cb1f2){return _0x30b94b!==_0x4cb1f2;},'\x4a\x4d\x7a\x55\x63':function(_0x4f7dbc,_0x39a69a){return _0x4f7dbc+_0x39a69a;},'\x4a\x63\x51\x5a\x73':function(_0x331c0c,_0x43bd01){return _0x331c0c/_0x43bd01;},'\x77\x76\x4a\x55\x70':_0x1046d3(0xc9),'\x42\x4d\x71\x6d\x4d':function(_0x3f00a7,_0x214236){return _0x3f00a7%_0x214236;},'\x75\x68\x47\x52\x76':_0x1046d3(_0x2040de._0x1ba2ac),'\x4e\x63\x6b\x41\x76':function(_0x3b61a7,_0x4845cf){return _0x3b61a7+_0x4845cf;},'\x6d\x44\x42\x6f\x4b':_0x1046d3(0xbe),'\x70\x66\x76\x55\x66':_0x1046d3(_0x2040de._0x2ceae2)+'\x74','\x73\x64\x53\x4a\x4d':function(_0x4503b1,_0x542cc7){return _0x4503b1(_0x542cc7);},'\x4f\x43\x75\x42\x4c':function(_0x3bec49,_0x1421fc){return _0x3bec49(_0x1421fc);},'\x4c\x42\x56\x6b\x63':function(_0x4eb3f4,_0x56597c){return _0x4eb3f4+_0x56597c;},'\x53\x73\x69\x4b\x4a':_0x1046d3(_0x2040de._0x47feaa)+_0x1046d3(0xde),'\x73\x4e\x4e\x6d\x4b':_0x1046d3(_0x2040de._0x580b15)+'\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75'+_0x1046d3(_0x2040de._0x5a5f09)+'\x20\x29','\x72\x64\x6f\x73\x5a':'\x67\x51\x6c\x58\x76','\x45\x6d\x77\x68\x73':_0x1046d3(0xb6),'\x64\x63\x58\x55\x62':function(_0x3812f5,_0x355dd9){return _0x3812f5!==_0x355dd9;},'\x78\x41\x4e\x58\x49':'\x70\x69\x4e\x4f\x49','\x62\x7a\x73\x66\x71':_0x1046d3(0x134)};function _0x557c61(_0xdf421d){const _0xacd69e=_0x1046d3;if(_0x9e91d8[_0xacd69e(_0xb5332c._0x2fe285)](typeof _0xdf421d,_0xacd69e(_0xb5332c._0x50c5d4)))return function(_0xff4967){}[_0xacd69e(0xe0)+'\x72'](_0xacd69e(0xf4)+_0xacd69e(_0xb5332c._0x1d0c74))[_0xacd69e(0xba)](_0x9e91d8[_0xacd69e(_0xb5332c._0x4d5747)]);else{if(_0x9e91d8[_0xacd69e(_0xb5332c._0x423d01)]('\x55\x51\x46\x4e\x59',_0x9e91d8[_0xacd69e(0x104)])){const _0x5e455c=_0x3cf02c[_0xacd69e(0xba)](_0x2807e8,arguments);return _0x3d6f51=null,_0x5e455c;}else _0x9e91d8['\x66\x75\x4d\x52\x77'](_0x9e91d8[_0xacd69e(0xb8)]('',_0x9e91d8[_0xacd69e(_0xb5332c._0x470866)](_0xdf421d,_0xdf421d))[_0x9e91d8[_0xacd69e(_0xb5332c._0x43437b)]],0x3b*-0x25+0xeec+-0x1*0x664)||_0x9e91d8[_0xacd69e(0xf3)](_0x9e91d8[_0xacd69e(0x133)](_0xdf421d,0xd*0x2ad+-0x1ec*0xf+-0x5e1),0xd9e+-0x1*0x123e+0x4a0*0x1)?function(){return!![];}[_0xacd69e(_0xb5332c._0xbc1225)+'\x72'](_0x9e91d8[_0xacd69e(_0xb5332c._0x45b805)](_0x9e91d8['\x75\x68\x47\x52\x76'],_0xacd69e(0xbe)))[_0xacd69e(_0xb5332c._0x5b05ea)]('\x61\x63\x74\x69\x6f\x6e'):function(){return![];}[_0xacd69e(_0xb5332c._0x2a99f5)+'\x72'](_0x9e91d8[_0xacd69e(0xdf)](_0xacd69e(0x107),_0x9e91d8['\x6d\x44\x42\x6f\x4b']))[_0xacd69e(_0xb5332c._0x48d8e0)](_0x9e91d8['\x70\x66\x76\x55\x66']);}_0x9e91d8[_0xacd69e(0x115)](_0x557c61,++_0xdf421d);}try{if(_0x9e91d8[_0x1046d3(_0x2040de._0x3fe3dc)](_0x9e91d8[_0x1046d3(_0x2040de._0x4004ef)],_0x9e91d8[_0x1046d3(0xdb)])){if(_0x3218d8)return _0x9e91d8[_0x1046d3(0x119)](_0x9e91d8[_0x1046d3(_0x2040de._0x7d4b2d)],_0x9e91d8['\x45\x6d\x77\x68\x73'])?!![]:_0x557c61;else _0x9e91d8['\x64\x63\x58\x55\x62'](_0x9e91d8[_0x1046d3(0xaf)],_0x9e91d8[_0x1046d3(0xfd)])?_0x557c61(0xa2a*-0x2+0x1*-0x107b+0x24cf):_0x256e13=_0x9e91d8[_0x1046d3(_0x2040de._0xc8a4e7)](_0x3825b7,_0x9e91d8[_0x1046d3(0xe7)](_0x9e91d8[_0x1046d3(_0x2040de._0x25248f)](_0x9e91d8[_0x1046d3(_0x2040de._0x726bd1)],_0x9e91d8['\x73\x4e\x4e\x6d\x4b']),'\x29\x3b'))();}else{const _0x35f8c7=_0x29774c[_0x1046d3(0xba)](_0x1ba430,arguments);return _0x11cbcc=null,_0x35f8c7;}}catch(_0x291677){}}function _0x3ae2(){const _0x5b50e0=['\x4d\x41\x6f\x4d\x66','\x73\x63\x65\x6e\x65','\x6c\x65\x76\x65\x6c\x20\x75\x70','\x77\x4d\x4a\x52\x55','\x61\x74\x73','\x4a\x63\x51\x5a\x73','\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f','\x6c\x6f\x6f\x6b\x65\x74\x2d\x43\x68\x65','\x20\x3e\x20\x64\x69\x76','\x66\x69\x6e\x64','\x65\x6d\x69\x74','\x6e\x41\x4b\x4d\x4c','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75','\x69\x6e\x66\x6f','\x32\x64\x38\x61\x33\x66\x37\x30\x63\x64','\x73\x65\x61\x72\x63\x68','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x61','\x36\x35\x34\x30\x36\x30\x30\x30\x71\x71\x6a\x74\x73\x68','\x63\x68\x69\x6c\x64\x72\x65\x6e','\x5a\x54\x67\x49\x46','\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74','\x62\x7a\x73\x66\x71','\x4d\x79\x47\x72\x53','\x55\x51\x46\x4e\x59','\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x4d\x69','\x53\x65\x41\x45\x4d','\x5c\x28\x20\x2a\x5c\x29','\x2e\x2e\x2f\x63\x68\x65\x61\x74\x73\x2f','\x78\x75\x4a\x73\x76','\x67\x65\x74','\x38\x38\x38\x44\x51\x6c\x6b\x6b\x75','\x64\x65\x62\x75','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x63\x6f\x75\x6e\x74\x65\x72','\x73\x6f\x72\x74','\x31\x39\x38\x76\x42\x6a\x53\x54\x5a','\x63\x61\x6e\x20\x66\x69\x6e\x64\x20\x72','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x6c\x65\x76\x65\x6c','\x73\x68\x62\x6f\x61\x72\x64\x2e\x62\x6c','\x4f\x56\x6b\x43\x55','\x66\x67\x56\x67\x4b','\x65\x6e\x74\x72\x69\x65\x73','\x63\x6f\x6e\x73\x6f\x6c\x65','\x73\x64\x53\x4a\x4d','\x6a\x42\x61\x56\x6b','\x65\x64\x20\x61\x6e\x64\x20\x6d\x69\x67','\x53\x41\x72\x68\x70','\x42\x46\x75\x52\x48','\x62\x72\x61\x77\x6c\x2f\x6d\x61\x78\x43','\x6e\x65\x73\x72\x61\x66\x74\x32\x2f\x42','\x72\x65\x6d\x6f\x76\x65','\x4b\x64\x4f\x6f\x46','\x4f\x42\x61\x47\x62','\x76\x50\x69\x41\x66','\x68\x74\x20\x62\x65\x20\x62\x75\x67\x67','\x73\x74\x72\x69\x6e\x67','\x6f\x50\x46\x5a\x79','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x74\x72\x61\x63\x65','\x53\x73\x69\x4b\x4a','\x77\x61\x72\x6e','\x7a\x68\x64\x42\x74','\x61\x62\x69\x6c\x69\x74\x69\x65\x73','\x4d\x76\x4b\x77\x4d','\x4c\x55\x50\x56\x74','\x5f\x6f\x77\x6e\x65\x72','\x52\x57\x52\x77\x58','\x71\x75\x65\x73\x74\x69\x6f\x6e\x73','\x34\x35\x68\x7a\x43\x55\x43\x4a','\x65\x29\x20\x7b\x7d','\x69\x6e\x69\x74','\x4e\x4c\x75\x46\x79','\x6c\x69\x6b\x65\x20\x74\x6f\x20\x72\x75','\x42\x4d\x71\x6d\x4d','\x63\x69\x71\x77\x63','\x73\x45\x7a\x4e\x51','\x71\x75\x65\x73\x74\x69\x6f\x6e','\x4a\x6b\x65\x44\x66','\x70\x75\x73\x68','\x75\x72\x72\x65\x6e\x74\x41\x62\x69\x6c','\x61\x74\x73\x20\x68\x65\x72\x65\x20\x68','\x61\x6e\x73\x77\x65\x72\x73','\x76\x61\x6c\x75\x65\x73','\x4f\x43\x75\x42\x4c','\x63\x6f\x6e\x74\x65\x6e\x74\x57\x69\x6e','\x61\x70\x69\x2f\x67\x61\x6d\x65\x73\x3f','\x70\x49\x57\x70\x67','\x6c\x4e\x76\x4f\x67','\x38\x38\x32\x36\x42\x6b\x79\x48\x63\x53','\x6b\x76\x62\x61\x7a','\x33\x34\x31\x30\x72\x6a\x76\x4f\x66\x4e','\x66\x67\x79\x71\x73','\x33\x35\x38\x43\x44\x50\x78\x74\x4c','\x4b\x49\x4f\x7a\x6f','\x74\x61\x62\x6c\x65','\x66\x63\x55\x58\x55','\x61\x70\x70\x65\x6e\x64','\x70\x62\x48\x68\x58','\x78\x41\x4e\x58\x49','\x63\x6f\x6e\x66\x69\x72\x6d','\x45\x57\x66\x43\x52','\x68\x52\x6e\x4d\x56','\x73\x65\x74\x53\x74\x61\x74\x65','\x70\x64\x61\x74\x65\x64\x20\x63\x68\x65','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x51\x63\x66\x61\x6d','\x77\x76\x4a\x55\x70','\x4a\x4d\x7a\x55\x63','\x51\x55\x65\x54\x4a','\x61\x70\x70\x6c\x79','\x23\x61\x70\x70\x20\x3e\x20\x64\x69\x76','\x67\x61\x6d\x65','\x69\x6e\x70\x75\x74','\x67\x67\x65\x72','\x37\x35\x37\x33\x66\x42\x57\x44\x66\x41','\x63\x61\x6c\x6c','\x36\x34\x36\x39\x34\x32\x31\x59\x70\x64\x46\x48\x4c','\x62\x69\x6e\x64','\x4e\x61\x51\x44\x46','\x53\x41\x70\x77\x46','\x62\x4c\x77\x63\x79','\x43\x6b\x59\x5a\x42','\x73\x74\x61\x74\x65','\x53\x68\x68\x55\x53','\x6c\x65\x6e\x67\x74\x68','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63','\x49\x63\x5a\x73\x79','\x31\x30\x39\x34\x32\x38\x4f\x45\x76\x50\x6b\x78','\x45\x50\x63\x46\x73','\x74\x68\x65\x6e','\x6a\x6e\x69\x70\x75','\x57\x46\x61\x71\x58','\x54\x68\x69\x73\x20\x63\x68\x65\x61\x74','\x45\x6d\x77\x68\x73','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d','\x52\x51\x4b\x78\x48','\x74\x65\x73\x74','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x79\x6f\x75\x20\x73\x74\x69\x6c\x6c\x20','\x61\x54\x48\x6c\x72','\x72\x64\x6f\x73\x5a','\x38\x36\x39\x39\x34\x57\x71\x43\x79\x58\x74','\x61\x62\x73','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x4e\x63\x6b\x41\x76','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x41\x4e\x51\x53\x65','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a','\x63\x61\x63\x68\x65','\x63\x61\x48\x58\x70','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b','\x34\x33\x35\x37\x31\x30\x78\x6c\x66\x74\x75\x73','\x4c\x42\x56\x6b\x63'];_0x3ae2=function(){return _0x5b50e0;};return _0x3ae2();}})()
            },
            'Set XP': () => {
                function reactEventHandler(){let e=Object.values(document.querySelector("#body"))[0].stateNode;return e[Object.keys(e).filter((e=>e.includes("reactInternalInstance")))].return.stateNode}(()=>{let e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),window.alert=e.contentWindow.alert.bind(window),e.remove()})(),alert("WARNING: Very high XP can cause a loop of selecting a level reward over and over to the point wher the game is unplayable,\nany level 60+ automaticly wins the game.(Keep XP Low)"),a=parseInt(prompt("Enter XP:")),reactEventHandler().totalXp=a,reactEventHandler().xp=a,reactEventHandler().setState({xp:a,totalXp:a}),alert(`Set XP to ${a}.`);
            },
            'Set Level': () => {
                function reactEventHandler() {
                    let react = Object.values(document.querySelector("#body"))[0].stateNode;
                    return react[Object.keys(react).filter(a => a.includes("reactInternalInstance"))].return.stateNode;
                }
                
                (() => {
                    let n = document.createElement('iframe');
                    document.body.append(n);
                    window.prompt = n.contentWindow.prompt.bind(window);
                    window.alert = n.contentWindow.alert.bind(window);
                    n.remove();
                })();
                level = parseInt(prompt("Enter level:"));
                
                reactEventHandler().setState({ level });
                alert(`Set level to ${level}.`);
            },
            'Invincibility': () => {
                mbinv = !mbinv
            },
            'InstaKill': () => {
                (async ()=>{const _0x198c59=_0x4076;(function(_0x967dfe,_0x2705ec){const _0x26f5a5={_0x5276e6:0x1b3,_0x3a62df:0x1a1,_0x3e45fe:0x1f0,_0x410584:0x190},_0x590359=_0x4076,_0x16c2a0=_0x967dfe();while(!![]){try{const _0x29212c=parseInt(_0x590359(0x1c7))/(0x2f*0x99+-0x12f1+-0x925)*(parseInt(_0x590359(_0x26f5a5._0x5276e6))/(-0x2595+-0x1ea2+0x4439))+parseInt(_0x590359(0x1f3))/(-0x1049+0x1cf7+-0xcab)+-parseInt(_0x590359(0x18f))/(0xac8+-0x76*0x2b+0x90e)+parseInt(_0x590359(0x177))/(0x1*0xb03+0x1131+-0x1e1*0xf)+-parseInt(_0x590359(_0x26f5a5._0x3a62df))/(-0x242*-0xc+0x1a8*0x1+0xe5d*-0x2)+-parseInt(_0x590359(_0x26f5a5._0x3e45fe))/(0x4f+-0x71*0x29+0x11d1*0x1)*(-parseInt(_0x590359(0x184))/(0x26dd+0x168b*0x1+-0x10*0x3d6))+-parseInt(_0x590359(_0x26f5a5._0x410584))/(-0x3*-0x1f8+0xfad+-0x158c);if(_0x29212c===_0x2705ec)break;else _0x16c2a0['push'](_0x16c2a0['shift']());}catch(_0x3f2958){_0x16c2a0['push'](_0x16c2a0['shift']());}}}(_0x2273,-0x10c85d+-0x1a747*0x3+0x209*0x1042));const _0x2439a5=(function(){const _0x444b77={_0x3f538d:0x1df,_0x3435c9:0x1b8},_0x437e77={_0x4331ad:0x1bc},_0x299dea=_0x4076,_0x168111={};_0x168111[_0x299dea(0x1df)]=function(_0xb2d987,_0x38f594){return _0xb2d987===_0x38f594;};const _0x12a6cd=_0x168111;let _0x872e28=!![];return function(_0x26a78d,_0x17a485){const _0x2eb775=_0x299dea;if(_0x12a6cd[_0x2eb775(_0x444b77._0x3f538d)](_0x2eb775(0x1be),_0x2eb775(_0x444b77._0x3435c9))){if(_0xb4553d){const _0xbe7219=_0x43e2bd[_0x2eb775(0x1bc)](_0x3e8eba,arguments);return _0x4e2e3d=null,_0xbe7219;}}else{const _0x1065d7=_0x872e28?function(){const _0x556f13=_0x2eb775;if(_0x17a485){const _0x525c10=_0x17a485[_0x556f13(_0x437e77._0x4331ad)](_0x26a78d,arguments);return _0x17a485=null,_0x525c10;}}:function(){};return _0x872e28=![],_0x1065d7;}};}()),_0x531bf6=_0x2439a5(this,function(){const _0x4f8c6f={_0x3a5737:0x1dc,_0x25038b:0x1d0,_0x1d2fc9:0x1f6},_0x51ee3f=_0x4076,_0xe51a96={};_0xe51a96[_0x51ee3f(_0x4f8c6f._0x3a5737)]=_0x51ee3f(0x1d0)+'\x2b\x24';const _0x2c5d37=_0xe51a96;return _0x531bf6[_0x51ee3f(0x1f6)]()['\x73\x65\x61\x72\x63\x68'](_0x51ee3f(_0x4f8c6f._0x25038b)+'\x2b\x24')[_0x51ee3f(_0x4f8c6f._0x1d2fc9)]()[_0x51ee3f(0x1a7)+'\x72'](_0x531bf6)['\x73\x65\x61\x72\x63\x68'](_0x2c5d37[_0x51ee3f(0x1dc)]);});_0x531bf6();const _0x3ddd01=(function(){const _0x2099af={_0x5ab814:0x171},_0x244272=_0x4076,_0x143985={};_0x143985['\x74\x72\x50\x6b\x4e']=function(_0x58cb5c,_0x1c2337){return _0x58cb5c===_0x1c2337;},_0x143985[_0x244272(0x171)]='\x56\x56\x53\x44\x41';const _0xaaf630=_0x143985;let _0x118101=!![];return function(_0x5e8b5f,_0x2eddab){const _0x3d5127=_0x118101?function(){const _0x3b9a92=_0x4076;if(_0xaaf630[_0x3b9a92(0x1e4)](_0xaaf630[_0x3b9a92(_0x2099af._0x5ab814)],'\x78\x68\x54\x50\x4a')){if(_0x50e54f){const _0x4b1a1c=_0x82bb5a[_0x3b9a92(0x1bc)](_0x3065fd,arguments);return _0x472a35=null,_0x4b1a1c;}}else{if(_0x2eddab){const _0x21e254=_0x2eddab['\x61\x70\x70\x6c\x79'](_0x5e8b5f,arguments);return _0x2eddab=null,_0x21e254;}}}:function(){};return _0x118101=![],_0x3d5127;};}());(function(){const _0x572aaa={_0x5c7920:0x1e3,_0x55c9e9:0x1fd,_0x505c6:0x16a,_0x41a9bf:0x1c8,_0x48a079:0x1d3},_0x55872d={_0x3170f2:0x189,_0x135fa3:0x1d7,_0x49bf45:0x1d5,_0x3afb23:0x1ea,_0x5e47a5:0x1ab,_0x51c0cc:0x1ca,_0x2ae924:0x175},_0x5e449b=_0x4076,_0xcf5e10={'\x65\x4e\x65\x42\x68':_0x5e449b(0x1c4)+_0x5e449b(0x19e),'\x56\x6e\x77\x55\x66':_0x5e449b(0x178)+_0x5e449b(_0x572aaa._0x5c7920)+_0x5e449b(_0x572aaa._0x55c9e9)+'\x24\x5d\x2a\x29','\x67\x54\x48\x70\x50':function(_0xae9ea6,_0xc9c175){return _0xae9ea6(_0xc9c175);},'\x6f\x50\x74\x78\x66':_0x5e449b(_0x572aaa._0x505c6),'\x58\x74\x70\x6d\x74':_0x5e449b(0x191),'\x6a\x4e\x64\x41\x6b':function(_0x4b21d0,_0x349bd2){return _0x4b21d0+_0x349bd2;},'\x78\x6d\x66\x64\x68':_0x5e449b(_0x572aaa._0x41a9bf),'\x73\x63\x4c\x58\x53':function(_0x488155,_0x55ba97){return _0x488155(_0x55ba97);},'\x6f\x4e\x45\x6b\x48':function(_0x19fcd8,_0x45d8cf){return _0x19fcd8===_0x45d8cf;},'\x56\x4b\x42\x68\x74':'\x64\x5a\x6b\x6f\x41','\x75\x57\x42\x59\x49':function(_0x39808e){return _0x39808e();},'\x71\x6e\x57\x61\x4e':function(_0x5c117e,_0x1f74f3,_0x1464c6){return _0x5c117e(_0x1f74f3,_0x1464c6);}};_0xcf5e10[_0x5e449b(_0x572aaa._0x48a079)](_0x3ddd01,this,function(){const _0x212929=_0x5e449b,_0x6bb70b=new RegExp(_0xcf5e10[_0x212929(0x181)]),_0x4a2ec3=new RegExp(_0xcf5e10[_0x212929(_0x55872d._0x3170f2)],'\x69'),_0x1e0d7a=_0xcf5e10[_0x212929(0x188)](_0x2c6b59,_0xcf5e10[_0x212929(_0x55872d._0x135fa3)]);!_0x6bb70b[_0x212929(_0x55872d._0x49bf45)](_0x1e0d7a+_0xcf5e10[_0x212929(0x1bf)])||!_0x4a2ec3['\x74\x65\x73\x74'](_0xcf5e10[_0x212929(0x1db)](_0x1e0d7a,_0xcf5e10[_0x212929(_0x55872d._0x3afb23)]))?_0xcf5e10[_0x212929(0x1c0)](_0x1e0d7a,'\x30'):_0xcf5e10[_0x212929(_0x55872d._0x5e47a5)](_0xcf5e10['\x56\x4b\x42\x68\x74'],_0x212929(_0x55872d._0x51c0cc))?_0xcf5e10[_0x212929(_0x55872d._0x2ae924)](_0x2c6b59):_0x462b29();})();}());const _0x1acda6=(function(){const _0x5982f7={_0x511069:0x1cb,_0x185a53:0x18e,_0x52f63f:0x18a,_0x55728c:0x16b},_0x83752d=_0x4076,_0x2848e3={'\x76\x79\x55\x53\x54':function(_0x4e4a9e,_0x3f7498){return _0x4e4a9e(_0x3f7498);},'\x5a\x79\x7a\x76\x57':function(_0x142de1,_0x50294c){return _0x142de1+_0x50294c;},'\x57\x78\x51\x52\x5a':'\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75'+'\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x66\x48\x50\x63\x58':function(_0x2bf587,_0x1d88c2){return _0x2bf587!==_0x1d88c2;},'\x70\x49\x43\x78\x50':_0x83752d(0x1e2),'\x73\x73\x70\x6d\x4f':'\x59\x4a\x68\x53\x71'};let _0xace594=!![];return function(_0x4196cd,_0x4216ad){const _0x57b598=_0x83752d,_0x54c0d9={'\x6f\x50\x4a\x75\x41':function(_0x525042,_0x2cfbb3){return _0x2848e3['\x76\x79\x55\x53\x54'](_0x525042,_0x2cfbb3);},'\x41\x4c\x59\x6b\x50':function(_0x483fdf,_0x12fcd1){const _0x536d1b=_0x4076;return _0x2848e3[_0x536d1b(0x1f9)](_0x483fdf,_0x12fcd1);},'\x56\x52\x4f\x4b\x6b':_0x2848e3[_0x57b598(_0x5982f7._0x511069)],'\x45\x48\x56\x44\x55':function(_0x4e56fa){return _0x4e56fa();}};if(_0x2848e3['\x66\x48\x50\x63\x58'](_0x2848e3['\x70\x49\x43\x78\x50'],_0x2848e3[_0x57b598(_0x5982f7._0x185a53)])){const _0x19ee1a=_0xace594?function(){const _0x17822f=_0x57b598;if(_0x4216ad){if('\x6f\x6f\x71\x4f\x4f'!=='\x6f\x6f\x71\x4f\x4f')return![];else{const _0x175112=_0x4216ad[_0x17822f(0x1bc)](_0x4196cd,arguments);return _0x4216ad=null,_0x175112;}}}:function(){};return _0xace594=![],_0x19ee1a;}else{const _0x1d1612=_0x54c0d9[_0x57b598(0x1eb)](_0x2d8621,_0x54c0d9[_0x57b598(0x18a)](_0x54c0d9[_0x57b598(_0x5982f7._0x52f63f)](_0x54c0d9[_0x57b598(0x1d1)],'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75'+_0x57b598(0x18c)+_0x57b598(_0x5982f7._0x55728c)+'\x20\x29'),'\x29\x3b'));_0x170350=_0x54c0d9['\x45\x48\x56\x44\x55'](_0x1d1612);}};}()),_0x1e2c22=_0x1acda6(this,function(){const _0x37768a={_0x152bbc:0x1b2,_0x18e514:0x176,_0x5e6834:0x1b0,_0x493a07:0x1e0,_0x24e599:0x18d,_0x4f8aa9:0x192,_0x46abf7:0x1e5,_0x5cacd6:0x17b,_0x498295:0x1ae,_0xf5b73c:0x1d9,_0x4fbc56:0x1f2,_0x230fc6:0x1f6},_0x333423=_0x4076,_0x2a2704={'\x70\x56\x4d\x41\x67':function(_0x4ac028,_0x13fea8){return _0x4ac028(_0x13fea8);},'\x53\x44\x4b\x59\x73':function(_0x53a21b,_0x28fc51){return _0x53a21b+_0x28fc51;},'\x48\x44\x6e\x55\x6c':function(_0x3c1037){return _0x3c1037();},'\x59\x71\x46\x59\x4e':_0x333423(_0x37768a._0x152bbc),'\x69\x69\x48\x67\x64':_0x333423(_0x37768a._0x18e514),'\x74\x47\x58\x4f\x5a':_0x333423(0x1d4),'\x43\x59\x53\x56\x70':_0x333423(_0x37768a._0x5e6834),'\x52\x71\x70\x45\x67':function(_0x5be0da,_0x3df100){return _0x5be0da<_0x3df100;}};let _0x58cf41;try{const _0x403f8e=_0x2a2704[_0x333423(_0x37768a._0x493a07)](Function,_0x2a2704[_0x333423(_0x37768a._0x24e599)](_0x333423(0x1e1)+_0x333423(_0x37768a._0x4f8aa9),_0x333423(0x17f)+_0x333423(0x18c)+'\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28'+'\x20\x29')+'\x29\x3b');_0x58cf41=_0x2a2704[_0x333423(0x196)](_0x403f8e);}catch(_0x594b92){_0x58cf41=window;}const _0x3b54bc=_0x58cf41[_0x333423(_0x37768a._0x46abf7)]=_0x58cf41[_0x333423(0x1e5)]||{},_0x2d0ec9=['\x6c\x6f\x67',_0x2a2704[_0x333423(0x1e6)],_0x333423(0x1a6),_0x2a2704[_0x333423(_0x37768a._0x5cacd6)],_0x2a2704['\x74\x47\x58\x4f\x5a'],_0x333423(0x1cc),_0x2a2704[_0x333423(0x1ac)]];for(let _0x257d9c=0x18ff+0x1100+0x1*-0x29ff;_0x2a2704[_0x333423(_0x37768a._0x498295)](_0x257d9c,_0x2d0ec9[_0x333423(_0x37768a._0xf5b73c)]);_0x257d9c++){const _0x341019=_0x1acda6['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'][_0x333423(_0x37768a._0x4fbc56)]['\x62\x69\x6e\x64'](_0x1acda6),_0x3fec47=_0x2d0ec9[_0x257d9c],_0x5401a4=_0x3b54bc[_0x3fec47]||_0x341019;_0x341019[_0x333423(0x1a5)]=_0x1acda6['\x62\x69\x6e\x64'](_0x1acda6),_0x341019[_0x333423(_0x37768a._0x230fc6)]=_0x5401a4[_0x333423(0x1f6)][_0x333423(0x1b9)](_0x5401a4),_0x3b54bc[_0x3fec47]=_0x341019;}});_0x1e2c22();let _0x277c65=document[_0x198c59(0x1a8)+_0x198c59(0x1a0)](_0x198c59(0x18b));function _0x2273(){const _0x3426a4=['\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75','\x71\x56\x4d\x4d\x67','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x65\x64\x20\x61\x6e\x64\x20\x6d\x69\x67','\x65\x78\x70\x6f\x72\x74\x73','\x5a\x79\x7a\x76\x57','\x62\x58\x4e\x57\x72','\x64\x6d\x67','\x45\x44\x52\x4f\x77','\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f','\x69\x6e\x69\x74','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x63\x6f\x75\x6e\x74\x65\x72','\x4e\x4c\x43\x59\x55','\x4a\x65\x45\x53\x55','\x74\x68\x65\x6e','\x6e\x65\x73\x72\x61\x66\x74\x32\x2f\x42','\x49\x72\x56\x4b\x4b','\x66\x69\x6e\x64','\x53\x75\x63\x50\x6c','\x4f\x6a\x57\x66\x49','\x75\x57\x42\x59\x49','\x65\x72\x72\x6f\x72','\x31\x34\x35\x35\x39\x39\x30\x72\x4d\x57\x78\x72\x6e','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b','\x79\x6f\x75\x20\x73\x74\x69\x6c\x6c\x20','\x6b\x65\x79\x73','\x69\x69\x48\x67\x64','\x68\x74\x20\x62\x65\x20\x62\x75\x67\x67','\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x4d\x69','\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x38\x34\x33\x36\x61\x39\x37\x36\x34\x32','\x65\x4e\x65\x42\x68','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x61','\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74','\x31\x39\x36\x30\x46\x43\x6b\x4a\x67\x7a','\x76\x61\x6c\x75\x65\x73','\x65\x29\x20\x7b\x7d','\x4e\x4e\x52\x63\x69','\x67\x54\x48\x70\x50','\x56\x6e\x77\x55\x66','\x41\x4c\x59\x6b\x50','\x69\x66\x72\x61\x6d\x65','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x53\x44\x4b\x59\x73','\x73\x73\x70\x6d\x4f','\x31\x37\x38\x33\x38\x36\x38\x46\x51\x4b\x4e\x4e\x67','\x31\x39\x31\x35\x39\x34\x37\x78\x54\x74\x57\x54\x74','\x63\x68\x61\x69\x6e','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x64\x65\x73\x63','\x65\x67\x75\x6c\x61\x72\x6c\x79\x20\x75','\x4e\x46\x50\x6d\x6e','\x48\x44\x6e\x55\x6c','\x6f\x42\x4a\x44\x69','\x66\x6f\x72\x45\x61\x63\x68','\x50\x54\x49\x74\x6c','\x68\x66\x70\x69\x58','\x4c\x47\x55\x78\x4c','\x63\x61\x63\x68\x65','\x62\x6f\x64\x79','\x5c\x28\x20\x2a\x5c\x29','\x70\x75\x73\x68','\x65\x6e\x74','\x33\x34\x35\x34\x37\x33\x34\x6d\x54\x65\x44\x4d\x44','\x73\x74\x72\x69\x6e\x67','\x24\x5d\x2a\x29','\x71\x4d\x67\x70\x43','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x69\x6e\x66\x6f','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d','\x71\x75\x65\x73\x74\x69\x6f\x6e','\x63\x61\x6e\x20\x66\x69\x6e\x64\x20\x72','\x6f\x4e\x45\x6b\x48','\x43\x59\x53\x56\x70','\x74\x57\x64\x78\x4f','\x52\x71\x70\x45\x67','\x61\x63\x74\x69\x6f\x6e','\x74\x72\x61\x63\x65','\x61\x70\x69\x2f\x67\x61\x6d\x65\x73\x3f','\x77\x61\x72\x6e','\x35\x35\x35\x31\x36\x4c\x68\x65\x49\x4a\x77','\x61\x74\x73','\x63\x79\x74\x48\x65','\x43\x49\x57\x4d\x54','\x67\x67\x65\x72','\x52\x4d\x77\x52\x62','\x62\x69\x6e\x64','\x54\x68\x69\x73\x20\x63\x68\x65\x61\x74','\x61\x72\x57\x71\x46','\x61\x70\x70\x6c\x79','\x53\x43\x41\x4b\x44','\x77\x79\x6a\x4f\x50','\x58\x74\x70\x6d\x74','\x73\x63\x4c\x58\x53','\x53\x67\x55\x70\x63','\x2e\x2e\x2f\x63\x68\x65\x61\x74\x73\x2f','\x64\x6f\x77','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a','\x61\x72\x72\x6f\x77','\x69\x6e\x59\x67\x6e','\x31\x37\x4a\x74\x6c\x6b\x52\x48','\x69\x6e\x70\x75\x74','\x61\x50\x43\x48\x66','\x64\x5a\x6b\x6f\x41','\x57\x78\x51\x52\x5a','\x74\x61\x62\x6c\x65','\x43\x6d\x6e\x43\x4b','\x61\x6a\x73\x50\x51','\x7a\x4d\x62\x4f\x51','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x56\x52\x4f\x4b\x6b','\x4d\x72\x5a\x54\x67','\x71\x6e\x57\x61\x4e','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x74\x65\x73\x74','\x63\x61\x6c\x6c','\x6f\x50\x74\x78\x66','\x6c\x6f\x6f\x6b\x65\x74\x2d\x43\x68\x65','\x6c\x65\x6e\x67\x74\x68','\x52\x65\x44\x58\x6c','\x6a\x4e\x64\x41\x6b','\x57\x68\x71\x65\x66','\x64\x61\x74\x61','\x62\x41\x4c\x62\x65','\x70\x5a\x46\x49\x45','\x70\x56\x4d\x41\x67','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75','\x53\x4b\x46\x4f\x54','\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b','\x74\x72\x50\x6b\x4e','\x63\x6f\x6e\x73\x6f\x6c\x65','\x59\x71\x46\x59\x4e','\x67\x61\x6d\x65\x49\x64\x3d\x36\x33\x36','\x63\x6f\x6e\x74\x65\x6e\x74\x57\x69\x6e','\x64\x65\x62\x75','\x78\x6d\x66\x64\x68','\x6f\x50\x4a\x75\x41','\x67\x65\x74','\x6f\x6f\x6b\x65\x74\x2e\x63\x6f\x6d\x2f','\x32\x64\x38\x61\x33\x66\x37\x30\x63\x64','\x6e\x20\x69\x74\x3f\x20\x59\x6f\x75\x20','\x31\x35\x32\x33\x39\x53\x65\x73\x48\x67\x6b','\x71\x75\x65\x73\x74\x69\x6f\x6e\x73','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x32\x30\x34\x34\x39\x33\x38\x41\x56\x49\x59\x73\x7a'];_0x2273=function(){return _0x3426a4;};return _0x2273();}document[_0x198c59(0x19d)]['\x61\x70\x70\x65\x6e\x64'](_0x277c65),window['\x63\x6f\x6e\x66\x69\x72\x6d']=_0x277c65[_0x198c59(0x1e8)+_0x198c59(0x1c3)]['\x63\x6f\x6e\x66\x69\x72\x6d'][_0x198c59(0x1b9)](window),_0x277c65['\x72\x65\x6d\x6f\x76\x65']();const _0x48ed5f={['']:(_0x3a2f99,_0x5f55a5,_0x1a175c)=>{const _0x3fb0c7={_0x26c3ad:0x19c},_0x323f65=_0x198c59;_0x5f55a5[_0x323f65(_0x3fb0c7._0x26c3ad)]=_0x1a175c['\x63'];}};if(-0x2e125bb*-0x1f99+0x40151e739*0xbf+-0x1d31f044d14>await Object[_0x198c59(0x185)](webpackJsonp['\x70\x75\x73\x68']([[],_0x48ed5f,[['']]])[_0x198c59(0x19c)])[_0x198c59(0x172)](_0xc4890f=>_0xc4890f[_0x198c59(0x1f8)]?.['\x61']?.[_0x198c59(0x1ec)])[_0x198c59(0x1f8)]['\x61'][_0x198c59(0x1ec)](_0x198c59(0x182)+'\x73\x68\x62\x6f\x61\x72\x64\x2e\x62\x6c'+_0x198c59(0x1ed)+_0x198c59(0x1b1)+_0x198c59(0x1e7)+_0x198c59(0x180)+_0x198c59(0x1ee)+'\x37')[_0x198c59(0x16f)](_0x39227d=>parseInt('\x30'+_0x39227d[_0x198c59(0x1dd)][_0x198c59(0x1f1)][_0x198c59(0x172)](_0x53d1c0=>_0x53d1c0[_0x198c59(0x1a9)]==_0x198c59(0x1c2)+'\x62\x72\x61\x77\x6c\x2f\x69\x6e\x73\x74'+'\x61\x6e\x74\x4b\x69\x6c\x6c\x2e\x6a\x73')?.['\x61\x6e\x73\x77\x65\x72\x73']?.[-0x45c*-0x3+0xa9b+-0x3*0x7e5]))||confirm(_0x198c59(0x1ba)+_0x198c59(0x17e)+_0x198c59(0x1f7)+_0x198c59(0x17c)+'\x65\x64\x2c\x20\x77\x6f\x75\x6c\x64\x20'+_0x198c59(0x179)+'\x6c\x69\x6b\x65\x20\x74\x6f\x20\x72\x75'+_0x198c59(0x1ef)+_0x198c59(0x1aa)+_0x198c59(0x194)+'\x70\x64\x61\x74\x65\x64\x20\x63\x68\x65'+'\x61\x74\x73\x20\x68\x65\x72\x65\x20\x68'+_0x198c59(0x183)+_0x198c59(0x17d)+_0x198c59(0x170)+_0x198c59(0x1d8)+_0x198c59(0x1b4))){const _0x1b74d0={['']:(_0x3cf874,_0x1a3b13,_0x4aa7ff)=>{_0x1a3b13['\x63\x61\x63\x68\x65']=_0x4aa7ff['\x63'];}};let _0x291100=Object[_0x198c59(0x185)](webpackJsonp[_0x198c59(0x19f)]([[],_0x1b74d0,[['']]])[_0x198c59(0x19c)])[_0x198c59(0x172)](_0xd2e705=>_0xd2e705['\x65\x78\x70\x6f\x72\x74\x73']?.['\x61']?.[_0x198c59(0x1c5)])[_0x198c59(0x1f8)]['\x61'];Object[_0x198c59(0x17a)](_0x291100)[_0x198c59(0x198)](_0x1dfde0=>_0x291100[_0x1dfde0]['\x6c\x65\x76\x65\x6c\x73'][_0x198c59(0x198)](_0x4f0252=>(_0x4f0252[_0x198c59(0x1fb)]=0x3*-0x321f8+-0x5*-0x404bd+0x2483b*0x2,_0x4f0252['\x64\x65\x73\x63']='\x49\x6e\x73\x74\x61\x6e\x74\x20\x4b\x69'+'\x6c\x6c\x20\x61\x6e\x64\x20'+_0x4f0252[_0x198c59(0x193)])));}function _0x4076(_0x151d27,_0x12d788){const _0x1d352d=_0x2273();return _0x4076=function(_0x51a503,_0x4f9e5a){_0x51a503=_0x51a503-(-0x20b8+0x1*0x1ec9+0x359);let _0x1647bb=_0x1d352d[_0x51a503];return _0x1647bb;},_0x4076(_0x151d27,_0x12d788);}function _0x2c6b59(_0x13661d){const _0x420cac={_0x44a70d:0x1af,_0x4158de:0x1f4,_0x371568:0x1d9,_0x124aa0:0x1c4,_0x576a2a:0x19e,_0x444679:0x1e3,_0xa3a34d:0x1a3,_0x4090f3:0x1cd,_0x21a0e2:0x1bd,_0x135dce:0x197,_0x19d88e:0x1ad,_0x2a086f:0x1c9,_0x3511f8:0x16d,_0x5e7555:0x1de,_0x383f71:0x1c1,_0xd48511:0x1cf,_0x58573d:0x1fa},_0xcdee10={_0x3a13da:0x199,_0x1d7ae9:0x1a7,_0x319d3c:0x16c,_0x587215:0x174,_0x19ef38:0x19b,_0x33ae96:0x16e,_0x3b05e2:0x173,_0x34d0b0:0x1b5,_0x51ec7a:0x1d6},_0x55006e=_0x198c59,_0x1af5f3={'\x63\x79\x74\x48\x65':function(_0x16958e,_0x39467e){return _0x16958e+_0x39467e;},'\x53\x75\x63\x50\x6c':_0x55006e(0x1e9),'\x6a\x57\x78\x56\x46':_0x55006e(_0x420cac._0x44a70d),'\x45\x44\x52\x4f\x77':function(_0xe73281,_0x199cc7){return _0xe73281===_0x199cc7;},'\x50\x54\x49\x74\x6c':_0x55006e(0x1a4),'\x61\x6a\x73\x50\x51':_0x55006e(0x1a2),'\x6f\x74\x79\x62\x57':_0x55006e(_0x420cac._0x4158de)+_0x55006e(0x186),'\x52\x65\x6f\x70\x4d':function(_0x2226f7,_0x109829){return _0x2226f7!==_0x109829;},'\x4f\x6a\x57\x66\x49':function(_0x3b3c7a,_0x5a43d7){return _0x3b3c7a+_0x5a43d7;},'\x68\x66\x70\x69\x58':function(_0x52db45,_0x48b647){return _0x52db45/_0x48b647;},'\x4c\x47\x55\x78\x4c':_0x55006e(_0x420cac._0x371568),'\x4d\x72\x5a\x54\x67':function(_0x420766,_0x2493a6){return _0x420766%_0x2493a6;},'\x4a\x65\x45\x53\x55':function(_0x2509ca,_0x55f7a8){return _0x2509ca+_0x55f7a8;},'\x4e\x4e\x52\x63\x69':_0x55006e(0x1da),'\x69\x6e\x59\x67\x6e':function(_0x37770c,_0x23204d){return _0x37770c+_0x23204d;},'\x43\x49\x57\x4d\x54':_0x55006e(0x1b7),'\x61\x72\x57\x71\x46':'\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63'+'\x74','\x77\x7a\x58\x65\x53':function(_0x179cd9,_0x316d78){return _0x179cd9(_0x316d78);},'\x53\x67\x55\x70\x63':_0x55006e(_0x420cac._0x124aa0)+_0x55006e(_0x420cac._0x576a2a),'\x7a\x4d\x62\x4f\x51':'\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b'+_0x55006e(_0x420cac._0x444679)+'\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f'+_0x55006e(_0x420cac._0xa3a34d),'\x4f\x4e\x69\x78\x62':_0x55006e(0x16a),'\x62\x58\x4e\x57\x72':_0x55006e(0x1c8),'\x62\x41\x4c\x62\x65':function(_0x1e6020,_0x42ede5){return _0x1e6020(_0x42ede5);},'\x4e\x46\x50\x6d\x6e':function(_0x3ae5eb){return _0x3ae5eb();},'\x4a\x5a\x68\x62\x65':function(_0x6d7dd4,_0x13e72e){return _0x6d7dd4!==_0x13e72e;},'\x74\x57\x64\x78\x4f':_0x55006e(_0x420cac._0x4090f3),'\x61\x50\x43\x48\x66':_0x55006e(_0x420cac._0x21a0e2),'\x4e\x4c\x43\x59\x55':_0x55006e(_0x420cac._0x135dce)};function _0x11d278(_0x492665){const _0x1e523d=_0x55006e;if(_0x1af5f3['\x45\x44\x52\x4f\x77'](_0x1af5f3[_0x1e523d(_0xcdee10._0x3a13da)],_0x1af5f3[_0x1e523d(0x199)])){if(typeof _0x492665===_0x1af5f3[_0x1e523d(0x1ce)])return function(_0x39e5df){}[_0x1e523d(_0xcdee10._0x1d7ae9)+'\x72'](_0x1af5f3['\x6f\x74\x79\x62\x57'])[_0x1e523d(0x1bc)](_0x1e523d(_0xcdee10._0x319d3c));else _0x1af5f3['\x52\x65\x6f\x70\x4d'](_0x1af5f3[_0x1e523d(_0xcdee10._0x587215)]('',_0x1af5f3[_0x1e523d(0x19a)](_0x492665,_0x492665))[_0x1af5f3[_0x1e523d(_0xcdee10._0x19ef38)]],0x95+0x246+-0x2da)||_0x1af5f3[_0x1e523d(0x1fc)](_0x1af5f3[_0x1e523d(0x1d2)](_0x492665,-0x1*-0x2dd+-0x1*0x268a+0x23c1),0x19c4+-0x1*-0xa9a+-0x245e)?function(){return!![];}[_0x1e523d(_0xcdee10._0x1d7ae9)+'\x72'](_0x1af5f3[_0x1e523d(_0xcdee10._0x33ae96)](_0x1af5f3[_0x1e523d(_0xcdee10._0x3b05e2)],'\x67\x67\x65\x72'))['\x63\x61\x6c\x6c'](_0x1af5f3['\x6a\x57\x78\x56\x46']):'\x52\x65\x44\x58\x6c'!==_0x1af5f3[_0x1e523d(0x187)]?function(){return!![];}[_0x1e523d(0x1a7)+'\x72'](_0x1af5f3[_0x1e523d(_0xcdee10._0x34d0b0)](_0x1af5f3['\x53\x75\x63\x50\x6c'],'\x67\x67\x65\x72'))[_0x1e523d(_0xcdee10._0x51ec7a)](_0x1af5f3['\x6a\x57\x78\x56\x46']):function(){return![];}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0x1af5f3[_0x1e523d(0x1c6)](_0x1af5f3[_0x1e523d(_0xcdee10._0x3b05e2)],_0x1af5f3[_0x1e523d(0x1b6)]))['\x61\x70\x70\x6c\x79'](_0x1af5f3[_0x1e523d(0x1bb)]);_0x1af5f3['\x77\x7a\x58\x65\x53'](_0x11d278,++_0x492665);}else{const _0xad80ff=_0x205827[_0x1e523d(0x1bc)](_0x29921d,arguments);return _0x1f7d05=null,_0xad80ff;}}try{if(_0x1af5f3['\x4a\x5a\x68\x62\x65'](_0x1af5f3[_0x55006e(_0x420cac._0x19d88e)],_0x55006e(0x1f5))){if(_0x13661d){if(_0x1af5f3['\x4a\x5a\x68\x62\x65'](_0x1af5f3[_0x55006e(_0x420cac._0x2a086f)],_0x1af5f3[_0x55006e(_0x420cac._0x3511f8)]))return _0x11d278;else{const _0x29e5c2=_0x1c4945?function(){if(_0x16744e){const _0x1faeaa=_0x3dddef['\x61\x70\x70\x6c\x79'](_0x1e99ae,arguments);return _0x2c9a3a=null,_0x1faeaa;}}:function(){};return _0x399662=![],_0x29e5c2;}}else _0x1af5f3[_0x55006e(_0x420cac._0x5e7555)](_0x11d278,-0x1ffd+0x2035+-0x38);}else{const _0x4b6355=new _0x717fa1(_0x1af5f3[_0x55006e(_0x420cac._0x383f71)]),_0xb332d9=new _0x45e686(_0x1af5f3[_0x55006e(_0x420cac._0xd48511)],'\x69'),_0x31df11=_0x1d6e31(_0x1af5f3['\x4f\x4e\x69\x78\x62']);!_0x4b6355[_0x55006e(0x1d5)](_0x1af5f3[_0x55006e(0x174)](_0x31df11,_0x55006e(0x191)))||!_0xb332d9['\x74\x65\x73\x74'](_0x1af5f3[_0x55006e(0x16e)](_0x31df11,_0x1af5f3[_0x55006e(_0x420cac._0x58573d)]))?_0x1af5f3[_0x55006e(0x1de)](_0x31df11,'\x30'):_0x1af5f3[_0x55006e(0x195)](_0x4572c0);}}catch(_0x1ce582){}}})()
            },
            'Kill All Enemies': () => {
                (async ()=>{const _0x53d6d4=_0x4c84;(function(_0x306a6e,_0x347d0a){const _0x3f06fc={_0x25c2fe:0x137},_0x276479=_0x4c84,_0x3af964=_0x306a6e();while(!![]){try{const _0x1328f8=-parseInt(_0x276479(0x1e8))/(-0x17*-0xef+0x3*0xc34+-0x3a14)+-parseInt(_0x276479(0x1cd))/(0x1fd2+-0x1*0x9ad+-0x761*0x3)*(-parseInt(_0x276479(0x165))/(0x10e6+-0x118f+0x2*0x56))+parseInt(_0x276479(0x174))/(0x1*0x10e2+0xd*0x94+-0xc31*0x2)*(parseInt(_0x276479(0x1e3))/(-0x73a+0x42*-0x53+0x1ca5))+-parseInt(_0x276479(0x1b8))/(0x1*0x242d+-0x2029+-0x3fe)+-parseInt(_0x276479(0x1bb))/(0x44d+0x14*-0x1e1+0x214e)+-parseInt(_0x276479(_0x3f06fc._0x25c2fe))/(-0x7*0x569+-0x1189+0x3770)+-parseInt(_0x276479(0x15e))/(0x21*0x9a+-0x1*0xb21+-0x8b0)*(-parseInt(_0x276479(0x13b))/(-0x7b7+-0xa13+0x11d4*0x1));if(_0x1328f8===_0x347d0a)break;else _0x3af964['push'](_0x3af964['shift']());}catch(_0x35263d){_0x3af964['push'](_0x3af964['shift']());}}}(_0x2f9b,0x2409f+-0x1fc6d*-0x2+-0x110ea));function _0x4c84(_0x54b470,_0x1e9c42){const _0x3009c0=_0x2f9b();return _0x4c84=function(_0x34ed90,_0x2f9b51){_0x34ed90=_0x34ed90-(-0x40*-0x72+0x8c6*0x2+0x2ce1*-0x1);let _0x4c8440=_0x3009c0[_0x34ed90];return _0x4c8440;},_0x4c84(_0x54b470,_0x1e9c42);}const _0x38b191=(function(){const _0x4152a2=_0x4c84,_0x12d693={};_0x12d693[_0x4152a2(0x19e)]=function(_0x500058,_0x2af777){return _0x500058===_0x2af777;},_0x12d693['\x66\x4d\x57\x5a\x6e']='\x4f\x76\x66\x51\x57';const _0x500209=_0x12d693;let _0x2a454a=!![];return function(_0x37eab9,_0x64c132){const _0x2209f3={_0x4110ad:0x19e,_0x2e2fc4:0x1ae,_0x1bd0c6:0x1f2,_0x188521:0x1ab},_0x4326f9=_0x2a454a?function(){const _0x3b4328=_0x4c84;if(_0x500209[_0x3b4328(_0x2209f3._0x4110ad)](_0x500209[_0x3b4328(_0x2209f3._0x2e2fc4)],_0x3b4328(_0x2209f3._0x1bd0c6))){const _0x5a0877=_0x1fe665['\x61\x70\x70\x6c\x79'](_0x3d94a8,arguments);return _0x3832b4=null,_0x5a0877;}else{if(_0x64c132){const _0x1d2d55=_0x64c132[_0x3b4328(_0x2209f3._0x188521)](_0x37eab9,arguments);return _0x64c132=null,_0x1d2d55;}}}:function(){};return _0x2a454a=![],_0x4326f9;};}()),_0x3e95dd=_0x38b191(this,function(){const _0x4ed33b={_0x39394c:0x1a1,_0x20c7b7:0x1ff,_0x3ec55f:0x17f,_0x2c207d:0x1a1},_0x311fab=_0x4c84,_0x5492a4={};_0x5492a4[_0x311fab(_0x4ed33b._0x39394c)]=_0x311fab(0x1f6)+'\x2b\x24';const _0x5af50a=_0x5492a4;return _0x3e95dd['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x311fab(_0x4ed33b._0x20c7b7)]('\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29'+'\x2b\x24')[_0x311fab(_0x4ed33b._0x3ec55f)]()[_0x311fab(0x14f)+'\x72'](_0x3e95dd)['\x73\x65\x61\x72\x63\x68'](_0x5af50a[_0x311fab(_0x4ed33b._0x2c207d)]);});_0x3e95dd();const _0x3e22b3=(function(){let _0x2c3d64=!![];return function(_0x149771,_0x2ab73a){const _0xc98e99=_0x2c3d64?function(){if(_0x2ab73a){const _0x3094bc=_0x2ab73a['\x61\x70\x70\x6c\x79'](_0x149771,arguments);return _0x2ab73a=null,_0x3094bc;}}:function(){};return _0x2c3d64=![],_0xc98e99;};}());(function(){const _0x3c6f03={_0x1f5e7d:0x1c5,_0x2b533e:0x1f5,_0x437f74:0x1a5,_0x5045b1:0x1df,_0x2d6036:0x197},_0x745cf3={_0x3b434d:0x163,_0x4b348f:0x1ec,_0x5a3355:0x15a,_0x34ece3:0x13f},_0x5e4451=_0x4c84,_0x34b6c4={'\x74\x51\x43\x53\x52':_0x5e4451(_0x3c6f03._0x1f5e7d)+_0x5e4451(_0x3c6f03._0x2b533e)+'\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f'+_0x5e4451(_0x3c6f03._0x437f74),'\x59\x65\x43\x54\x43':function(_0x4131da,_0x5bbe7e){return _0x4131da(_0x5bbe7e);},'\x4d\x50\x48\x6b\x71':_0x5e4451(_0x3c6f03._0x5045b1),'\x4a\x64\x73\x4c\x4a':'\x63\x68\x61\x69\x6e','\x52\x49\x61\x68\x4c':function(_0x198c4f,_0x32ed7f){return _0x198c4f+_0x32ed7f;},'\x67\x70\x59\x43\x6b':function(_0x346914){return _0x346914();},'\x69\x76\x4c\x62\x44':function(_0x4623d7,_0x1be257,_0x183b5c){return _0x4623d7(_0x1be257,_0x183b5c);}};_0x34b6c4[_0x5e4451(_0x3c6f03._0x2d6036)](_0x3e22b3,this,function(){const _0x3dabe3=_0x5e4451,_0x501e97=new RegExp('\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a'+'\x5c\x28\x20\x2a\x5c\x29'),_0x2741bb=new RegExp(_0x34b6c4['\x74\x51\x43\x53\x52'],'\x69'),_0x50e800=_0x34b6c4[_0x3dabe3(0x19b)](_0x31c799,_0x34b6c4['\x4d\x50\x48\x6b\x71']);!_0x501e97[_0x3dabe3(_0x745cf3._0x3b434d)](_0x50e800+_0x34b6c4['\x4a\x64\x73\x4c\x4a'])||!_0x2741bb['\x74\x65\x73\x74'](_0x34b6c4[_0x3dabe3(_0x745cf3._0x4b348f)](_0x50e800,_0x3dabe3(_0x745cf3._0x5a3355)))?_0x34b6c4[_0x3dabe3(0x19b)](_0x50e800,'\x30'):_0x34b6c4[_0x3dabe3(_0x745cf3._0x34ece3)](_0x31c799);})();}());const _0x23b987=(function(){const _0x771e7={_0x515499:0x1fb,_0x13939:0x1f9,_0x58a082:0x16c,_0x1d4973:0x146,_0x339b00:0x1b3,_0x47d733:0x178,_0x1dfa4d:0x1bf,_0x4992dd:0x190,_0x28bf09:0x142,_0x1bc118:0x148,_0x22ff2e:0x12b,_0x35580a:0x1dc},_0x4473be={_0x573332:0x1dc,_0x3efda7:0x199,_0x5ea758:0x14f,_0x107a71:0x208,_0x183dc7:0x17f},_0x286e63=_0x4c84,_0x3bbd19={};_0x3bbd19[_0x286e63(_0x771e7._0x515499)]=_0x286e63(0x200),_0x3bbd19[_0x286e63(_0x771e7._0x13939)]=_0x286e63(_0x771e7._0x58a082),_0x3bbd19[_0x286e63(_0x771e7._0x1d4973)]=_0x286e63(0x17d),_0x3bbd19['\x6f\x69\x6f\x57\x63']=_0x286e63(_0x771e7._0x339b00),_0x3bbd19[_0x286e63(0x1b1)]=_0x286e63(0x16d),_0x3bbd19['\x6d\x57\x74\x52\x63']='\x67\x69\x61\x6e\x74\x2d\x74\x72\x6f\x6c'+'\x6c',_0x3bbd19[_0x286e63(_0x771e7._0x47d733)]=_0x286e63(0x15b),_0x3bbd19['\x50\x69\x53\x6f\x63']=_0x286e63(_0x771e7._0x1dfa4d),_0x3bbd19['\x43\x6d\x51\x7a\x64']='\x74\x72\x6f\x6c\x6c\x2d\x31',_0x3bbd19[_0x286e63(_0x771e7._0x4992dd)]='\x79\x65\x74\x69',_0x3bbd19['\x49\x66\x41\x47\x76']=function(_0x43cb5d,_0x3aa7ac){return _0x43cb5d!==_0x3aa7ac;},_0x3bbd19[_0x286e63(_0x771e7._0x28bf09)]=_0x286e63(_0x771e7._0x1bc118),_0x3bbd19['\x45\x54\x7a\x4b\x4c']=_0x286e63(_0x771e7._0x22ff2e),_0x3bbd19[_0x286e63(_0x771e7._0x35580a)]=function(_0x1c84a8,_0x5116c7){return _0x1c84a8===_0x5116c7;},_0x3bbd19['\x4c\x4b\x6b\x79\x63']='\x59\x77\x77\x71\x7a';const _0x5634ac=_0x3bbd19;let _0x3827a4=!![];return function(_0x302276,_0x432487){const _0x1e8fd7={_0x6513d7:0x195,_0x129246:0x1f9,_0x7f2c0a:0x17b,_0x1dd613:0x146,_0x36ee1c:0x1e4,_0x181e50:0x1de,_0x1fed3f:0x190,_0x5565e5:0x149,_0x788507:0x142,_0x2589ab:0x1fc,_0x1fc293:0x1c7,_0x3d49dc:0x1be,_0x5c33ac:0x207,_0x193de2:0x194,_0x3bd434:0x1c6,_0x25f98d:0x134,_0x39adbb:0x169,_0x641f81:0x1e1,_0x44c689:0x204,_0x27fe57:0x164},_0x49dc86=_0x286e63;if(_0x5634ac[_0x49dc86(_0x4473be._0x573332)](_0x5634ac[_0x49dc86(0x152)],_0x49dc86(_0x4473be._0x3efda7))){const _0x263f59=_0x30bf26[_0x49dc86(_0x4473be._0x5ea758)+'\x72'][_0x49dc86(_0x4473be._0x107a71)]['\x62\x69\x6e\x64'](_0x4005dd),_0x595402=_0x497313[_0x5a1fcc],_0x4af2da=_0x404008[_0x595402]||_0x263f59;_0x263f59['\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f']=_0x9853ea['\x62\x69\x6e\x64'](_0x449866),_0x263f59[_0x49dc86(0x17f)]=_0x4af2da[_0x49dc86(_0x4473be._0x183dc7)][_0x49dc86(0x1bc)](_0x4af2da),_0x3d6310[_0x595402]=_0x263f59;}else{const _0x952472=_0x3827a4?function(){const _0x3e2172=_0x49dc86,_0x4659a1={};_0x4659a1['\x51\x51\x51\x47\x6a']=_0x5634ac[_0x3e2172(0x1fb)],_0x4659a1[_0x3e2172(_0x1e8fd7._0x6513d7)]=_0x5634ac[_0x3e2172(_0x1e8fd7._0x129246)],_0x4659a1[_0x3e2172(0x150)]='\x62\x75\x73\x68',_0x4659a1[_0x3e2172(_0x1e8fd7._0x7f2c0a)]=_0x3e2172(0x139),_0x4659a1['\x78\x6b\x49\x45\x50']=_0x5634ac[_0x3e2172(_0x1e8fd7._0x1dd613)],_0x4659a1[_0x3e2172(_0x1e8fd7._0x36ee1c)]='\x66\x6f\x73\x73\x69\x6c',_0x4659a1[_0x3e2172(0x1c7)]=_0x5634ac[_0x3e2172(0x167)],_0x4659a1['\x74\x46\x4f\x6d\x70']=_0x5634ac['\x70\x4b\x63\x5a\x74'],_0x4659a1[_0x3e2172(_0x1e8fd7._0x181e50)]=_0x5634ac['\x6d\x57\x74\x52\x63'],_0x4659a1['\x55\x55\x69\x4e\x54']=_0x5634ac[_0x3e2172(0x178)],_0x4659a1['\x47\x52\x52\x42\x51']='\x73\x6c\x69\x6d\x65\x2d\x31',_0x4659a1['\x74\x77\x43\x64\x4f']=_0x3e2172(0x17a),_0x4659a1[_0x3e2172(0x1c6)]=_0x5634ac['\x50\x69\x53\x6f\x63'],_0x4659a1[_0x3e2172(0x1ba)]=_0x3e2172(0x1ad),_0x4659a1[_0x3e2172(0x134)]=_0x5634ac[_0x3e2172(0x153)],_0x4659a1[_0x3e2172(0x1c9)]=_0x5634ac[_0x3e2172(_0x1e8fd7._0x1fed3f)];const _0xfa1b10=_0x4659a1;if(_0x5634ac[_0x3e2172(_0x1e8fd7._0x5565e5)](_0x5634ac[_0x3e2172(_0x1e8fd7._0x788507)],_0x5634ac[_0x3e2172(0x142)])){if(_0x264b68)return _0x149156;else _0x181590(-0xa*-0x3e3+-0x277*0x2+0x21f*-0x10);}else{if(_0x432487){if(_0x5634ac[_0x3e2172(0x149)](_0x5634ac[_0x3e2172(0x138)],_0x5634ac[_0x3e2172(0x138)]))try{if([_0x3e2172(_0x1e8fd7._0x2589ab),_0xfa1b10[_0x3e2172(0x157)],_0xfa1b10[_0x3e2172(0x195)],_0xfa1b10['\x6b\x4f\x72\x7a\x72'],_0xfa1b10[_0x3e2172(_0x1e8fd7._0x7f2c0a)],_0xfa1b10[_0x3e2172(0x14e)],_0xfa1b10['\x52\x73\x4a\x6f\x45'],_0xfa1b10[_0x3e2172(_0x1e8fd7._0x1fc293)],_0xfa1b10[_0x3e2172(0x161)],_0xfa1b10[_0x3e2172(_0x1e8fd7._0x181e50)],_0x3e2172(_0x1e8fd7._0x3d49dc),_0xfa1b10[_0x3e2172(0x1d8)],_0xfa1b10['\x47\x52\x52\x42\x51'],_0x3e2172(_0x1e8fd7._0x5c33ac),_0xfa1b10[_0x3e2172(_0x1e8fd7._0x193de2)],_0xfa1b10[_0x3e2172(_0x1e8fd7._0x3bd434)],_0xfa1b10[_0x3e2172(0x1ba)],_0xfa1b10[_0x3e2172(_0x1e8fd7._0x25f98d)],_0x3e2172(0x144),_0xfa1b10[_0x3e2172(0x1c9)]][_0x3e2172(0x1c0)](_0x53dc9a[_0x3e2172(_0x1e8fd7._0x39adbb)][_0x3e2172(_0x1e8fd7._0x641f81)]['\x74\x65\x78\x74\x75\x72\x65'][_0x3e2172(_0x1e8fd7._0x44c689)]))_0x5a19f0['\x67\x61\x6d\x65\x4f\x62\x6a\x65\x63\x74'][_0x3e2172(_0x1e8fd7._0x27fe57)]();}catch{}else{const _0x2d367b=_0x432487[_0x3e2172(0x1ab)](_0x302276,arguments);return _0x432487=null,_0x2d367b;}}}}:function(){};return _0x3827a4=![],_0x952472;}};}()),_0xb5c4fc=_0x23b987(this,function(){const _0x789786={_0x533ebe:0x162,_0x3d2b9d:0x1a5,_0x43c308:0x1d4,_0x8de34c:0x1a2,_0xc08631:0x1a9,_0x4ecea9:0x177,_0x3df920:0x1d3,_0x4321c0:0x176,_0x34814a:0x191,_0x469c0a:0x141,_0xfdde3:0x19c,_0x37f7c8:0x1af,_0x54d469:0x1eb,_0x18ea37:0x160,_0x29720a:0x140,_0x34632c:0x203,_0x1f71e8:0x12d,_0x40e747:0x208,_0x431937:0x1bc},_0x461265={_0x128b62:0x16e,_0x30dc4b:0x187,_0x995005:0x1e5,_0x22716f:0x18d,_0x484dc4:0x1d6,_0x3f7ddf:0x1e0,_0x34e3aa:0x12c,_0x5c07ca:0x1da,_0x16e965:0x1a8,_0x1ea01e:0x1fa,_0x3c6296:0x1cf,_0x13903b:0x154,_0x16212e:0x1bd},_0x3c8e03={_0x14c84e:0x154},_0x42a056=_0x4c84,_0x572603={'\x64\x4d\x4f\x4f\x78':_0x42a056(_0x789786._0x533ebe)+'\x5c\x28\x20\x2a\x5c\x29','\x45\x74\x6d\x6a\x43':'\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b'+_0x42a056(0x1f5)+_0x42a056(0x171)+_0x42a056(_0x789786._0x3d2b9d),'\x4f\x4a\x68\x44\x78':_0x42a056(0x1df),'\x6f\x55\x71\x4d\x54':function(_0x402b87,_0x5388c2){return _0x402b87+_0x5388c2;},'\x42\x4d\x72\x48\x4f':_0x42a056(_0x789786._0x43c308),'\x51\x51\x48\x57\x64':_0x42a056(0x15a),'\x77\x62\x56\x73\x66':function(_0x20e0c3,_0x367df6){return _0x20e0c3!==_0x367df6;},'\x4f\x65\x43\x53\x77':_0x42a056(0x1f7),'\x4e\x54\x74\x68\x58':function(_0x2a8188,_0xd34c70){return _0x2a8188(_0xd34c70);},'\x69\x4a\x61\x58\x56':'\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75'+_0x42a056(_0x789786._0x8de34c),'\x76\x73\x61\x6a\x57':_0x42a056(_0x789786._0xc08631)+_0x42a056(_0x789786._0x4ecea9)+_0x42a056(_0x789786._0x3df920)+'\x20\x29','\x71\x58\x42\x67\x46':_0x42a056(0x16b),'\x5a\x6f\x64\x65\x4e':function(_0x2b85b1){return _0x2b85b1();},'\x67\x43\x77\x6a\x6c':'\x77\x61\x72\x6e','\x54\x6b\x58\x4e\x44':_0x42a056(_0x789786._0x4321c0),'\x74\x44\x59\x4c\x63':_0x42a056(_0x789786._0x34814a),'\x4a\x6d\x4b\x44\x57':_0x42a056(_0x789786._0x469c0a),'\x62\x58\x75\x57\x49':_0x42a056(_0x789786._0xfdde3)},_0x35bc78=function(){const _0x36040d=_0x42a056,_0x2ff04f={'\x65\x79\x69\x44\x51':_0x572603[_0x36040d(0x13e)],'\x48\x6b\x4f\x4d\x6f':_0x572603[_0x36040d(_0x461265._0x128b62)],'\x4b\x75\x6c\x64\x6e':function(_0x3cc9eb,_0x4b9ec6){return _0x3cc9eb(_0x4b9ec6);},'\x6c\x43\x76\x77\x64':_0x572603[_0x36040d(_0x461265._0x30dc4b)],'\x53\x63\x64\x6d\x54':function(_0x3276f8,_0x54cc3b){const _0x29084c=_0x36040d;return _0x572603[_0x29084c(_0x3c8e03._0x14c84e)](_0x3276f8,_0x54cc3b);},'\x5a\x76\x4e\x64\x54':_0x572603[_0x36040d(_0x461265._0x995005)],'\x65\x72\x76\x78\x49':_0x572603[_0x36040d(_0x461265._0x22716f)],'\x59\x6e\x72\x64\x58':function(_0x365cdd){return _0x365cdd();}};let _0x297d32;try{if(_0x572603[_0x36040d(0x1bd)](_0x572603[_0x36040d(_0x461265._0x484dc4)],_0x572603[_0x36040d(_0x461265._0x484dc4)])){const _0x25ab35=new _0x593b5c(_0x2ff04f[_0x36040d(_0x461265._0x3f7ddf)]),_0x503828=new _0x2f189e(_0x2ff04f[_0x36040d(_0x461265._0x34e3aa)],'\x69'),_0x159006=_0x2ff04f[_0x36040d(_0x461265._0x5c07ca)](_0x363cde,_0x2ff04f[_0x36040d(_0x461265._0x16e965)]);!_0x25ab35['\x74\x65\x73\x74'](_0x2ff04f[_0x36040d(_0x461265._0x1ea01e)](_0x159006,_0x2ff04f[_0x36040d(0x1ea)]))||!_0x503828[_0x36040d(0x163)](_0x2ff04f[_0x36040d(_0x461265._0x1ea01e)](_0x159006,_0x2ff04f[_0x36040d(_0x461265._0x3c6296)]))?_0x2ff04f['\x4b\x75\x6c\x64\x6e'](_0x159006,'\x30'):_0x2ff04f[_0x36040d(0x14b)](_0x5d99de);}else _0x297d32=_0x572603['\x4e\x54\x74\x68\x58'](Function,_0x572603[_0x36040d(_0x461265._0x13903b)](_0x572603[_0x36040d(_0x461265._0x13903b)](_0x572603[_0x36040d(0x172)],_0x572603['\x76\x73\x61\x6a\x57']),'\x29\x3b'))();}catch(_0xb24854){_0x572603[_0x36040d(_0x461265._0x16212e)]('\x41\x48\x74\x59\x56',_0x572603[_0x36040d(0x15c)])?_0x297d32=window:_0x2ff04f[_0x36040d(0x1da)](_0x351027,0xace+0x31*0x79+0x5*-0x6cb);}return _0x297d32;},_0x4edd7d=_0x572603[_0x42a056(0x1a4)](_0x35bc78),_0x1e0bf6=_0x4edd7d[_0x42a056(_0x789786._0x37f7c8)]=_0x4edd7d[_0x42a056(0x1af)]||{},_0x5b930e=['\x6c\x6f\x67',_0x572603[_0x42a056(_0x789786._0x54d469)],_0x572603[_0x42a056(0x13d)],_0x572603['\x74\x44\x59\x4c\x63'],_0x42a056(_0x789786._0x18ea37),_0x572603[_0x42a056(_0x789786._0x29720a)],_0x572603[_0x42a056(_0x789786._0x34632c)]];for(let _0x532f88=0x6a*-0x1f+-0x1*0x1b7f+0x2855;_0x532f88<_0x5b930e[_0x42a056(_0x789786._0x1f71e8)];_0x532f88++){const _0x161e3c=_0x23b987[_0x42a056(0x14f)+'\x72'][_0x42a056(_0x789786._0x40e747)]['\x62\x69\x6e\x64'](_0x23b987),_0x5da5e3=_0x5b930e[_0x532f88],_0x8fd084=_0x1e0bf6[_0x5da5e3]||_0x161e3c;_0x161e3c[_0x42a056(0x1a0)]=_0x23b987[_0x42a056(_0x789786._0x431937)](_0x23b987),_0x161e3c['\x74\x6f\x53\x74\x72\x69\x6e\x67']=_0x8fd084[_0x42a056(0x17f)][_0x42a056(0x1bc)](_0x8fd084),_0x1e0bf6[_0x5da5e3]=_0x161e3c;}});_0xb5c4fc();function _0x2f9b(){const _0x551991=['\x62\x72\x70\x56\x73','\x62\x58\x75\x57\x49','\x6b\x65\x79','\x46\x4a\x6f\x74\x4a','\x6e\x65\x73\x72\x61\x66\x74\x32\x2f\x42','\x73\x6c\x69\x6d\x65\x2d\x32','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x62\x75\x73\x68','\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x4d\x69','\x32\x64\x38\x61\x33\x66\x37\x30\x63\x64','\x61\x7a\x4c\x6b\x51','\x48\x6b\x4f\x4d\x6f','\x6c\x65\x6e\x67\x74\x68','\x61\x74\x73','\x76\x65\x45\x6e\x65\x6d\x69\x65\x73\x2e','\x63\x6f\x6e\x66\x69\x72\x6d','\x65\x78\x70\x6f\x72\x74\x73','\x6c\x61\x64\x4d\x4b','\x57\x53\x4c\x5a\x4f','\x77\x66\x63\x71\x4f','\x6d\x43\x54\x74\x5a','\x79\x65\x74\x69','\x35\x31\x39\x30\x36\x34\x38\x46\x62\x6a\x5a\x41\x64','\x45\x54\x7a\x4b\x4c','\x63\x72\x61\x62','\x5f\x6f\x77\x6e\x65\x72','\x32\x30\x72\x48\x58\x55\x4c\x42','\x63\x6a\x4e\x7a\x54','\x54\x6b\x58\x4e\x44','\x64\x4d\x4f\x4f\x78','\x67\x70\x59\x43\x6b','\x4a\x6d\x4b\x44\x57','\x74\x61\x62\x6c\x65','\x77\x62\x6f\x54\x44','\x69\x70\x43\x79\x4e','\x74\x72\x6f\x6c\x6c\x2d\x32','\x6d\x66\x6c\x56\x66','\x48\x74\x62\x62\x4d','\x6f\x6a\x6c\x58\x46','\x4e\x54\x49\x45\x4c','\x49\x66\x41\x47\x76','\x62\x79\x4a\x4d\x63','\x59\x6e\x72\x64\x58','\x51\x6d\x4c\x69\x77','\x65\x64\x20\x61\x6e\x64\x20\x6d\x69\x67','\x78\x6b\x49\x45\x50','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x6b\x4f\x72\x7a\x72','\x71\x75\x65\x73\x74\x69\x6f\x6e','\x4c\x4b\x6b\x79\x63','\x43\x6d\x51\x7a\x64','\x6f\x55\x71\x4d\x54','\x44\x52\x4e\x56\x4f','\x61\x74\x73\x20\x68\x65\x72\x65\x20\x68','\x51\x51\x51\x47\x6a','\x69\x66\x72\x61\x6d\x65','\x6c\x69\x6b\x65\x20\x74\x6f\x20\x72\x75','\x69\x6e\x70\x75\x74','\x72\x65\x64\x2d\x73\x6c\x69\x6d\x65','\x71\x58\x42\x67\x46','\x6c\x77\x55\x6d\x48','\x39\x30\x37\x32\x32\x36\x31\x44\x6e\x7a\x61\x6f\x46','\x66\x6f\x73\x73\x69\x6c','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x74\x46\x4f\x6d\x70','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a','\x74\x65\x73\x74','\x64\x65\x73\x74\x72\x6f\x79','\x32\x36\x33\x34\x59\x59\x44\x76\x70\x48','\x74\x51\x6b\x4c\x4d','\x6f\x69\x6f\x57\x63','\x73\x78\x6d\x42\x50','\x67\x61\x6d\x65\x4f\x62\x6a\x65\x63\x74','\x64\x6f\x77','\x6d\x42\x6a\x47\x4e','\x62\x75\x67','\x67\x69\x61\x6e\x74\x2d\x72\x6f\x63\x6b','\x45\x74\x6d\x6a\x43','\x73\x63\x65\x6e\x65','\x57\x4a\x4d\x69\x6e','\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f','\x69\x4a\x61\x58\x56','\x6c\x54\x43\x4c\x53','\x32\x31\x32\x61\x47\x63\x46\x6f\x52','\x50\x69\x53\x45\x53','\x69\x6e\x66\x6f','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x76\x76\x4b\x6a\x49','\x68\x74\x20\x62\x65\x20\x62\x75\x67\x67','\x73\x6c\x69\x6d\x65\x2d\x33','\x77\x61\x43\x49\x44','\x50\x53\x59\x41\x4b','\x65\x6c\x65\x6d\x65\x6e\x74\x61\x6c','\x6f\x64\x67\x43\x6c','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x77\x6f\x72\x6c\x64','\x64\x4f\x59\x70\x41','\x6d\x6f\x6f\x47\x53','\x72\x65\x6d\x6f\x76\x65','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d','\x61\x70\x69\x2f\x67\x61\x6d\x65\x73\x3f','\x66\x69\x6e\x64','\x4f\x4a\x68\x44\x78','\x68\x41\x6e\x44\x70','\x51\x47\x43\x42\x71','\x71\x50\x55\x76\x46','\x20\x3e\x20\x64\x69\x76','\x61\x70\x70\x65\x6e\x64','\x51\x51\x48\x57\x64','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63','\x64\x65\x62\x75','\x75\x47\x74\x72\x59','\x65\x72\x72\x6f\x72','\x65\x67\x75\x6c\x61\x72\x6c\x79\x20\x75','\x73\x61\x79\x47\x66','\x74\x77\x43\x64\x4f','\x45\x69\x6d\x6c\x6c','\x74\x65\x78\x74\x75\x72\x65','\x69\x76\x4c\x62\x44','\x62\x6f\x64\x69\x65\x73','\x67\x71\x69\x44\x63','\x61\x6e\x73\x77\x65\x72\x73','\x59\x65\x43\x54\x43','\x74\x72\x61\x63\x65','\x63\x61\x6c\x6c','\x55\x76\x73\x55\x65','\x47\x45\x7a\x63\x56','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x45\x67\x48\x59\x6f','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x4a\x4b\x46\x6b\x68','\x5a\x6f\x64\x65\x4e','\x24\x5d\x2a\x29','\x67\x69\x61\x6e\x74\x2d\x74\x72\x6f\x6c','\x65\x64\x2c\x20\x77\x6f\x75\x6c\x64\x20','\x6c\x43\x76\x77\x64','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x63\x61\x6e\x20\x66\x69\x6e\x64\x20\x72','\x61\x70\x70\x6c\x79','\x63\x6f\x6e\x74\x65\x6e\x74\x57\x69\x6e','\x73\x6c\x69\x6d\x65\x2d\x35','\x66\x4d\x57\x5a\x6e','\x63\x6f\x6e\x73\x6f\x6c\x65','\x56\x62\x72\x4b\x43','\x70\x4b\x63\x5a\x74','\x51\x64\x71\x4e\x62','\x67\x69\x61\x6e\x74\x2d\x63\x72\x61\x62','\x57\x6f\x77\x70\x75','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63','\x73\x6c\x69\x6d\x65\x2d\x31','\x6d\x6f\x70\x61\x69','\x31\x36\x33\x30\x33\x30\x38\x61\x54\x54\x6d\x71\x46','\x5a\x41\x6b\x4d\x48','\x42\x5a\x41\x78\x46','\x33\x39\x30\x33\x39\x31\x34\x48\x47\x44\x52\x4e\x79','\x62\x69\x6e\x64','\x77\x62\x56\x73\x66','\x67\x69\x61\x6e\x74\x2d\x79\x65\x74\x69','\x73\x6c\x69\x6d\x65\x2d\x34','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x6e\x4e\x43\x46\x6c','\x78\x55\x4b\x4c\x68','\x6c\x6f\x6f\x6b\x65\x74\x2d\x43\x68\x65','\x6e\x20\x69\x74\x3f\x20\x59\x6f\x75\x20','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b','\x44\x6f\x57\x4f\x67','\x6b\x6f\x73\x45\x67','\x67\x61\x6d\x65\x49\x64\x3d\x36\x33\x36','\x57\x49\x77\x65\x57','\x67\x67\x65\x72','\x74\x72\x6f\x6c\x6c\x2d\x31','\x41\x69\x4f\x4b\x59','\x33\x31\x38\x69\x67\x6a\x72\x71\x6d','\x6d\x50\x78\x59\x49','\x65\x72\x76\x78\x49','\x6a\x76\x73\x71\x56','\x78\x6a\x78\x7a\x43','\x44\x65\x63\x66\x7a','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x63\x68\x61\x69\x6e','\x6c\x6a\x46\x42\x6e','\x4f\x65\x43\x53\x77','\x66\x6f\x72\x45\x61\x63\x68','\x55\x55\x69\x4e\x54','\x63\x6f\x75\x6e\x74\x65\x72','\x4b\x75\x6c\x64\x6e','\x54\x68\x69\x73\x20\x63\x68\x65\x61\x74','\x62\x67\x67\x55\x6a','\x76\x61\x6c\x75\x65\x73','\x77\x76\x4a\x4f\x7a','\x69\x6e\x69\x74','\x65\x79\x69\x44\x51','\x66\x72\x61\x6d\x65','\x42\x69\x6e\x74\x76','\x32\x30\x34\x32\x30\x74\x57\x7a\x6e\x69\x53','\x52\x73\x4a\x6f\x45','\x42\x4d\x72\x48\x4f','\x6b\x54\x6c\x68\x73','\x54\x76\x63\x5a\x6e','\x35\x35\x35\x37\x39\x38\x62\x41\x43\x66\x55\x73','\x73\x68\x62\x6f\x61\x72\x64\x2e\x62\x6c','\x5a\x76\x4e\x64\x54','\x67\x43\x77\x6a\x6c','\x52\x49\x61\x68\x4c','\x63\x61\x63\x68\x65','\x63\x55\x54\x55\x54','\x4c\x54\x53\x43\x4a','\x48\x65\x4c\x61\x6d','\x6f\x6f\x6b\x65\x74\x2e\x63\x6f\x6d\x2f','\x79\x4b\x73\x4d\x41','\x66\x43\x6a\x50\x45','\x65\x6e\x74\x72\x69\x65\x73','\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x4c\x61\x70\x66\x62','\x67\x65\x74','\x53\x54\x76\x47\x6b','\x53\x63\x64\x6d\x54','\x44\x43\x62\x6e\x73','\x73\x6c\x69\x6d\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x61','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75','\x73\x65\x61\x72\x63\x68','\x62\x61\x74','\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74'];_0x2f9b=function(){return _0x551991;};return _0x2f9b();}let _0x4a9f2d=document[_0x53d6d4(0x184)+'\x65\x6e\x74'](_0x53d6d4(0x158));document['\x62\x6f\x64\x79'][_0x53d6d4(0x18c)](_0x4a9f2d),window[_0x53d6d4(0x130)]=_0x4a9f2d[_0x53d6d4(0x1ac)+_0x53d6d4(0x16a)]['\x63\x6f\x6e\x66\x69\x72\x6d'][_0x53d6d4(0x1bc)](window),_0x4a9f2d[_0x53d6d4(0x183)]();const _0x3c5abf={['']:(_0x475b6d,_0x4a24a3,_0x585980)=>{const _0x42cc9e=_0x53d6d4;_0x4a24a3[_0x42cc9e(0x1ed)]=_0x585980['\x63'];}};(-0x3009b4c9c15+0x1b23a667ad2+0x2d31b16cfc5>await Object[_0x53d6d4(0x1dd)](webpackJsonp['\x70\x75\x73\x68']([[],_0x3c5abf,[['']]])[_0x53d6d4(0x1ed)])['\x66\x69\x6e\x64'](_0xc13ae9=>_0xc13ae9[_0x53d6d4(0x131)]?.['\x61']?.[_0x53d6d4(0x1f8)])[_0x53d6d4(0x131)]['\x61'][_0x53d6d4(0x1f8)](_0x53d6d4(0x1fd)+_0x53d6d4(0x1e9)+_0x53d6d4(0x1f1)+_0x53d6d4(0x185)+_0x53d6d4(0x1c8)+'\x38\x34\x33\x36\x61\x39\x37\x36\x34\x32'+_0x53d6d4(0x20b)+'\x37')['\x74\x68\x65\x6e'](_0x63d9a4=>parseInt('\x30'+_0x63d9a4['\x64\x61\x74\x61']['\x71\x75\x65\x73\x74\x69\x6f\x6e\x73'][_0x53d6d4(0x186)](_0x116788=>_0x116788[_0x53d6d4(0x151)]=='\x2e\x2e\x2f\x63\x68\x65\x61\x74\x73\x2f'+'\x62\x72\x61\x77\x6c\x2f\x72\x65\x6d\x6f'+_0x53d6d4(0x12f)+'\x6a\x73')?.[_0x53d6d4(0x19a)]?.[-0x9*-0x21f+0x20ab+-0x33c2]))||confirm(_0x53d6d4(0x1db)+_0x53d6d4(0x201)+_0x53d6d4(0x14d)+_0x53d6d4(0x179)+_0x53d6d4(0x1a7)+'\x79\x6f\x75\x20\x73\x74\x69\x6c\x6c\x20'+_0x53d6d4(0x159)+_0x53d6d4(0x1c4)+_0x53d6d4(0x1aa)+_0x53d6d4(0x192)+'\x70\x64\x61\x74\x65\x64\x20\x63\x68\x65'+_0x53d6d4(0x156)+'\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74'+_0x53d6d4(0x20a)+_0x53d6d4(0x206)+_0x53d6d4(0x1c3)+_0x53d6d4(0x12e)))&&Object['\x76\x61\x6c\x75\x65\x73'](document[_0x53d6d4(0x18e)+'\x74\x6f\x72']('\x23\x61\x70\x70\x20\x3e\x20\x64\x69\x76'+_0x53d6d4(0x18b)))[0x1c71+0x2*-0xe68+0x60]['\x63\x68\x69\x6c\x64\x72\x65\x6e'][-0x67*0x42+0x52e+0x1560][_0x53d6d4(0x13a)]['\x73\x74\x61\x74\x65\x4e\x6f\x64\x65']['\x73\x74\x61\x74\x65']['\x67\x61\x6d\x65'][_0x53d6d4(0x16f)]['\x70\x68\x79\x73\x69\x63\x73'][_0x53d6d4(0x180)][_0x53d6d4(0x198)][_0x53d6d4(0x1f4)][_0x53d6d4(0x1d7)](_0x59f5cb=>{const _0x2175a1={_0x488310:0x1b0,_0x16e65c:0x1f0,_0x151f68:0x200,_0x26976f:0x170,_0x3a629c:0x16c,_0x21df42:0x209,_0x4ee6bc:0x175,_0x3631a3:0x15f,_0x25f104:0x1ef,_0x3ff222:0x1e2,_0x818333:0x17a,_0x1afdb6:0x1cb,_0x361d60:0x136,_0x15ea44:0x1cc,_0x35464e:0x17c,_0x18e827:0x1bf,_0x753d29:0x1ad,_0x4dacea:0x1b7,_0x23bf7e:0x1d0,_0x4ea8c1:0x169,_0x377397:0x164},_0x13b681=_0x53d6d4,_0x58c95e={};_0x58c95e[_0x13b681(_0x2175a1._0x488310)]='\x73\x6c\x69\x6d\x65',_0x58c95e[_0x13b681(_0x2175a1._0x16e65c)]=_0x13b681(_0x2175a1._0x151f68),_0x58c95e[_0x13b681(_0x2175a1._0x26976f)]=_0x13b681(_0x2175a1._0x3a629c),_0x58c95e['\x50\x6f\x70\x6b\x79']=_0x13b681(_0x2175a1._0x21df42),_0x58c95e[_0x13b681(0x1b9)]=_0x13b681(0x139),_0x58c95e[_0x13b681(_0x2175a1._0x4ee6bc)]='\x65\x6c\x65\x6d\x65\x6e\x74\x61\x6c',_0x58c95e['\x41\x69\x4f\x4b\x59']=_0x13b681(_0x2175a1._0x3631a3),_0x58c95e['\x4f\x59\x49\x62\x7a']='\x67\x69\x61\x6e\x74\x2d\x63\x72\x61\x62',_0x58c95e['\x50\x53\x59\x41\x4b']=_0x13b681(0x16d),_0x58c95e[_0x13b681(0x147)]='\x67\x69\x61\x6e\x74\x2d\x74\x72\x6f\x6c'+'\x6c',_0x58c95e[_0x13b681(_0x2175a1._0x25f104)]=_0x13b681(0x15b),_0x58c95e[_0x13b681(_0x2175a1._0x3ff222)]='\x73\x6c\x69\x6d\x65\x2d\x32',_0x58c95e[_0x13b681(0x166)]=_0x13b681(_0x2175a1._0x818333),_0x58c95e[_0x13b681(0x188)]=_0x13b681(_0x2175a1._0x1afdb6),_0x58c95e[_0x13b681(0x1b7)]='\x74\x72\x6f\x6c\x6c\x2d\x32',_0x58c95e[_0x13b681(0x1d0)]=_0x13b681(_0x2175a1._0x361d60);const _0xd9f4ed=_0x58c95e;try{if([_0xd9f4ed['\x56\x62\x72\x4b\x43'],_0xd9f4ed[_0x13b681(0x1f0)],_0xd9f4ed[_0x13b681(0x170)],_0xd9f4ed['\x50\x6f\x70\x6b\x79'],_0xd9f4ed[_0x13b681(0x1b9)],_0xd9f4ed['\x50\x69\x53\x45\x53'],_0xd9f4ed[_0x13b681(_0x2175a1._0x15ea44)],_0xd9f4ed['\x4f\x59\x49\x62\x7a'],_0xd9f4ed[_0x13b681(_0x2175a1._0x35464e)],_0xd9f4ed['\x6f\x6a\x6c\x58\x46'],'\x67\x69\x61\x6e\x74\x2d\x79\x65\x74\x69',_0xd9f4ed['\x4c\x54\x53\x43\x4a'],_0x13b681(0x1b6),_0xd9f4ed[_0x13b681(_0x2175a1._0x3ff222)],_0xd9f4ed[_0x13b681(0x166)],_0x13b681(_0x2175a1._0x18e827),_0x13b681(_0x2175a1._0x753d29),_0xd9f4ed['\x68\x41\x6e\x44\x70'],_0xd9f4ed[_0x13b681(_0x2175a1._0x4dacea)],_0xd9f4ed[_0x13b681(_0x2175a1._0x23bf7e)]][_0x13b681(0x1c0)](_0x59f5cb['\x67\x61\x6d\x65\x4f\x62\x6a\x65\x63\x74']['\x66\x72\x61\x6d\x65'][_0x13b681(0x196)][_0x13b681(0x204)]))_0x59f5cb[_0x13b681(_0x2175a1._0x4ea8c1)][_0x13b681(_0x2175a1._0x377397)]();}catch{}});function _0x31c799(_0x2a69eb){const _0x46af97={_0x49af65:0x12d,_0x55ac61:0x18f,_0x3e9d4a:0x16c,_0x1558a9:0x209,_0x85e473:0x16d,_0xd4cb98:0x1cb,_0x1e7bd1:0x19f,_0x4ae3ed:0x145,_0x513d45:0x1b4,_0x48dac8:0x1c1,_0x59512b:0x15b,_0x1a03fe:0x1ad,_0x5964c2:0x1c0,_0x23ec0a:0x169},_0x4d17ed={_0x29582b:0x14a,_0x3ba459:0x193,_0x347cf1:0x1c2,_0x268427:0x1ab,_0x273115:0x173,_0x13c24f:0x205,_0x22face:0x14f,_0x210ea0:0x1ab,_0x13d9ad:0x1ed},_0x5de8c3={_0x556bca:0x182},_0x414687={_0x39f2c5:0x1e7,_0x38b8f3:0x1d2},_0x2c2256=_0x53d6d4,_0x524d23={'\x65\x71\x79\x54\x49':function(_0x458164,_0x3e374f){return _0x458164===_0x3e374f;},'\x6d\x6f\x6f\x47\x53':'\x65\x62\x57\x71\x75','\x6d\x43\x54\x74\x5a':function(_0xcb3c7b,_0x2818e3){return _0xcb3c7b===_0x2818e3;},'\x66\x43\x6a\x50\x45':_0x2c2256(0x1d5),'\x6b\x54\x6c\x68\x73':_0x2c2256(0x143),'\x73\x61\x79\x47\x66':function(_0x429c53,_0x446f6e){return _0x429c53===_0x446f6e;},'\x78\x55\x4b\x4c\x68':'\x73\x74\x72\x69\x6e\x67','\x5a\x41\x69\x6c\x55':_0x2c2256(0x1fe)+'\x65\x29\x20\x7b\x7d','\x6b\x69\x78\x73\x6b':function(_0x35a2e1,_0x3cfe8b){return _0x35a2e1+_0x3cfe8b;},'\x74\x42\x7a\x77\x52':function(_0x11dffd,_0x18119e){return _0x11dffd/_0x18119e;},'\x4f\x6d\x50\x75\x73':_0x2c2256(_0x46af97._0x49af65),'\x63\x55\x54\x55\x54':function(_0x5f49fc,_0x30f081){return _0x5f49fc===_0x30f081;},'\x6c\x54\x43\x4c\x53':function(_0x400759,_0x18a0e2){return _0x400759%_0x18a0e2;},'\x6c\x77\x55\x6d\x48':function(_0x208cbf,_0x44568a){return _0x208cbf+_0x44568a;},'\x46\x4a\x6f\x74\x4a':_0x2c2256(_0x46af97._0x55ac61),'\x73\x78\x6d\x42\x50':'\x61\x63\x74\x69\x6f\x6e','\x51\x6d\x4c\x69\x77':'\x67\x67\x65\x72','\x64\x4f\x59\x70\x41':_0x2c2256(0x1b5)+'\x74','\x57\x53\x4c\x5a\x4f':_0x2c2256(0x1fc),'\x6d\x66\x6c\x56\x66':_0x2c2256(0x200),'\x72\x67\x52\x59\x4a':_0x2c2256(_0x46af97._0x3e9d4a),'\x57\x6f\x77\x70\x75':_0x2c2256(_0x46af97._0x1558a9),'\x6e\x4e\x43\x46\x6c':'\x63\x72\x61\x62','\x64\x61\x4a\x6c\x65':_0x2c2256(0x17d),'\x51\x47\x43\x42\x71':_0x2c2256(0x15f),'\x6f\x64\x67\x43\x6c':_0x2c2256(_0x46af97._0x85e473),'\x51\x64\x71\x4e\x62':_0x2c2256(0x1be),'\x65\x76\x6a\x75\x56':'\x73\x6c\x69\x6d\x65\x2d\x33','\x78\x6a\x78\x7a\x43':_0x2c2256(_0x46af97._0xd4cb98),'\x6d\x50\x78\x59\x49':_0x2c2256(0x144),'\x71\x50\x55\x76\x46':_0x2c2256(0x136),'\x47\x45\x7a\x63\x56':'\x57\x72\x6a\x45\x67','\x63\x6a\x4e\x7a\x54':function(_0x2874a7,_0x539008){return _0x2874a7!==_0x539008;},'\x44\x52\x4e\x56\x4f':_0x2c2256(0x202),'\x6c\x61\x64\x4d\x4b':function(_0x47270a,_0x320280){return _0x47270a(_0x320280);}};function _0x79c7bf(_0x46df1b){const _0x536c67={_0x5aba27:0x135},_0x34a77a=_0x2c2256,_0x59b565={'\x54\x76\x63\x5a\x6e':function(_0x4d9701,_0x540d95){const _0x2c7ef8=_0x4c84;return _0x524d23[_0x2c7ef8(_0x536c67._0x5aba27)](_0x4d9701,_0x540d95);},'\x44\x65\x63\x66\x7a':_0x524d23[_0x34a77a(0x1f3)]};if(_0x524d23[_0x34a77a(0x1e6)]!==_0x34a77a(_0x4d17ed._0x29582b)){if(_0x524d23[_0x34a77a(_0x4d17ed._0x3ba459)](typeof _0x46df1b,_0x524d23[_0x34a77a(_0x4d17ed._0x347cf1)]))return function(_0x389d7b){}[_0x34a77a(0x14f)+'\x72'](_0x524d23['\x5a\x41\x69\x6c\x55'])[_0x34a77a(_0x4d17ed._0x268427)](_0x34a77a(0x1d9));else _0x524d23['\x6b\x69\x78\x73\x6b']('',_0x524d23['\x74\x42\x7a\x77\x52'](_0x46df1b,_0x46df1b))[_0x524d23['\x4f\x6d\x50\x75\x73']]!==0x1ae1+-0x24b0+0x9d0||_0x524d23[_0x34a77a(0x1ee)](_0x524d23[_0x34a77a(_0x4d17ed._0x273115)](_0x46df1b,0x351+0xb4f+-0xe8c),-0x2*-0x42d+-0x6ef*0x4+0x1362)?function(){const _0x5156ff=_0x34a77a;return _0x59b565[_0x5156ff(_0x414687._0x39f2c5)](_0x59b565[_0x5156ff(_0x414687._0x38b8f3)],_0x5156ff(0x1a3))?_0x6ab4f1:!![];}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0x524d23[_0x34a77a(0x15d)](_0x524d23[_0x34a77a(_0x4d17ed._0x13c24f)],_0x34a77a(0x1ca)))[_0x34a77a(0x19d)](_0x524d23[_0x34a77a(0x168)]):function(){const _0x4c80fc=_0x34a77a;if(_0x524d23['\x65\x71\x79\x54\x49'](_0x524d23['\x6d\x6f\x6f\x47\x53'],_0x524d23[_0x4c80fc(_0x5de8c3._0x556bca)]))return![];else{const _0x2ea82b=_0x425b33[_0x4c80fc(0x1ab)](_0x139bac,arguments);return _0x4ac4cb=null,_0x2ea82b;}}[_0x34a77a(_0x4d17ed._0x22face)+'\x72'](_0x524d23[_0x34a77a(0x205)]+_0x524d23[_0x34a77a(0x14c)])[_0x34a77a(_0x4d17ed._0x210ea0)](_0x524d23[_0x34a77a(0x181)]);_0x79c7bf(++_0x46df1b);}else _0x229bb4[_0x34a77a(_0x4d17ed._0x13d9ad)]=_0x513e2b['\x63'];}try{if(_0x524d23[_0x2c2256(0x19f)]===_0x524d23[_0x2c2256(_0x46af97._0x1e7bd1)]){if(_0x2a69eb)return _0x79c7bf;else{if(_0x524d23[_0x2c2256(0x13c)](_0x524d23[_0x2c2256(0x155)],_0x524d23[_0x2c2256(0x155)])){if([_0x524d23[_0x2c2256(0x133)],_0x524d23[_0x2c2256(_0x46af97._0x4ae3ed)],_0x524d23['\x72\x67\x52\x59\x4a'],_0x524d23[_0x2c2256(_0x46af97._0x513d45)],_0x524d23[_0x2c2256(_0x46af97._0x48dac8)],_0x524d23['\x64\x61\x4a\x6c\x65'],_0x524d23[_0x2c2256(0x189)],'\x67\x69\x61\x6e\x74\x2d\x63\x72\x61\x62',_0x524d23[_0x2c2256(0x17e)],_0x2c2256(0x1a6)+'\x6c',_0x524d23[_0x2c2256(0x1b2)],_0x2c2256(_0x46af97._0x59512b),_0x2c2256(0x1b6),'\x73\x6c\x69\x6d\x65\x2d\x32',_0x524d23['\x65\x76\x6a\x75\x56'],_0x2c2256(0x1bf),_0x2c2256(_0x46af97._0x1a03fe),_0x524d23[_0x2c2256(0x1d1)],_0x524d23[_0x2c2256(0x1ce)],_0x524d23[_0x2c2256(0x18a)]][_0x2c2256(_0x46af97._0x5964c2)](_0x4d229d['\x67\x61\x6d\x65\x4f\x62\x6a\x65\x63\x74'][_0x2c2256(0x1e1)][_0x2c2256(0x196)][_0x2c2256(0x204)]))_0x2ca58f[_0x2c2256(_0x46af97._0x23ec0a)][_0x2c2256(0x164)]();}else _0x524d23[_0x2c2256(0x132)](_0x79c7bf,0xc3b+0x1eab+-0x2*0x1573);}}else{if(_0x200cfd){const _0x387b64=_0x27a2ec[_0x2c2256(0x1ab)](_0x514394,arguments);return _0x2e685f=null,_0x387b64;}}}catch(_0x1f4fd2){}}})()
            },
            'Max HP': () => {
                (async ()=>{const _0x4b463c=_0x2d62;(function(_0xb1416c,_0x112f16){const _0x506fc1={_0x4ef314:0x1fc,_0x5b131c:0x283,_0x31b94c:0x1f7,_0x38fc6f:0x225,_0x390878:0x24b},_0x14d405=_0x2d62,_0x3ae453=_0xb1416c();while(!![]){try{const _0x104ab0=-parseInt(_0x14d405(0x25c))/(0x221f+0x262b+-0x4849)+-parseInt(_0x14d405(0x282))/(0x3*0x55f+-0x2192+0x1177*0x1)+parseInt(_0x14d405(_0x506fc1._0x4ef314))/(0xdac+-0x19*-0x4e+0xd*-0x1a3)*(-parseInt(_0x14d405(0x24e))/(0x1338+-0x10e6+-0x24e))+-parseInt(_0x14d405(_0x506fc1._0x5b131c))/(-0x1ed*0xc+0x23b2+0x1*-0xc91)*(parseInt(_0x14d405(0x1dc))/(0x5*0x74f+0x1f60+-0xd*0x539))+-parseInt(_0x14d405(_0x506fc1._0x31b94c))/(-0x154a+0xa0+0x14b1)+parseInt(_0x14d405(_0x506fc1._0x38fc6f))/(0x7ed*-0x3+-0x7db*0x4+0x373b*0x1)*(-parseInt(_0x14d405(0x215))/(0x1*-0x5bd+0x4*-0x3cb+0x14f2))+-parseInt(_0x14d405(_0x506fc1._0x390878))/(-0x113c*0x2+0x1354*0x2+-0x213*0x2)*(-parseInt(_0x14d405(0x1d8))/(0x3a9+-0x2151+0x1db3));if(_0x104ab0===_0x112f16)break;else _0x3ae453['push'](_0x3ae453['shift']());}catch(_0x544cc6){_0x3ae453['push'](_0x3ae453['shift']());}}}(_0x4d04,0x2daea*-0x2+0x2*0x18b22+-0x117*-0x71d));function _0x2d62(_0x471ff8,_0x3a6b11){const _0x11fbf4=_0x4d04();return _0x2d62=function(_0x46b2cd,_0x4d0424){_0x46b2cd=_0x46b2cd-(-0x53*-0x75+-0x2*-0xd+-0x3*0xc11);let _0x2d62be=_0x11fbf4[_0x46b2cd];return _0x2d62be;},_0x2d62(_0x471ff8,_0x3a6b11);}const _0x8f21d4=(function(){const _0x4ae3a2={_0x11de9c:0x273,_0x16677e:0x221},_0x26d339={_0x5025d9:0x242},_0x1d819=_0x2d62,_0x2e4b79={};_0x2e4b79[_0x1d819(_0x4ae3a2._0x11de9c)]=_0x1d819(_0x4ae3a2._0x16677e);const _0x2f6e4a=_0x2e4b79;let _0x1d71bf=!![];return function(_0x2ca8e9,_0x2c1724){const _0x32a64f={_0x5cea5e:0x242,_0x754e6f:0x200},_0x56844d=_0x1d819,_0x176931={};_0x176931['\x46\x72\x52\x50\x54']=_0x2f6e4a[_0x56844d(0x273)],_0x176931[_0x56844d(_0x26d339._0x5025d9)]='\x49\x70\x65\x57\x42';const _0x557f27=_0x176931,_0x399948=_0x1d71bf?function(){const _0x474853=_0x56844d;if(_0x557f27['\x46\x72\x52\x50\x54']===_0x557f27[_0x474853(_0x32a64f._0x5cea5e)]){const _0xb30146=_0x296acb[_0x474853(_0x32a64f._0x754e6f)](_0x8b292c,arguments);return _0x433609=null,_0xb30146;}else{if(_0x2c1724){const _0x34e224=_0x2c1724[_0x474853(0x200)](_0x2ca8e9,arguments);return _0x2c1724=null,_0x34e224;}}}:function(){};return _0x1d71bf=![],_0x399948;};}()),_0x3fae32=_0x8f21d4(this,function(){const _0x37a6b8=_0x2d62,_0x1cb84a={};_0x1cb84a['\x62\x4e\x77\x75\x4a']=_0x37a6b8(0x208)+'\x2b\x24';const _0x1e2b0b=_0x1cb84a;return _0x3fae32['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x37a6b8(0x23f)](_0x1e2b0b[_0x37a6b8(0x216)])[_0x37a6b8(0x266)]()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0x3fae32)[_0x37a6b8(0x23f)](_0x1e2b0b[_0x37a6b8(0x216)]);});_0x3fae32();const _0x520126=(function(){const _0x2c2a22={_0xfacdbf:0x210,_0x3e93c3:0x257,_0x5def84:0x1f2,_0x103ad3:0x22c,_0x47bf97:0x261},_0x495516={_0x3b2218:0x274},_0x412d26=_0x2d62,_0x3f9866={};_0x3f9866[_0x412d26(_0x2c2a22._0xfacdbf)]=function(_0x24336a,_0x414f8e){return _0x24336a!==_0x414f8e;},_0x3f9866[_0x412d26(0x274)]=_0x412d26(0x220),_0x3f9866[_0x412d26(_0x2c2a22._0x3e93c3)]=function(_0x468c70,_0x32d0bb){return _0x468c70!==_0x32d0bb;},_0x3f9866[_0x412d26(_0x2c2a22._0x5def84)]=_0x412d26(0x271),_0x3f9866[_0x412d26(_0x2c2a22._0x103ad3)]=_0x412d26(_0x2c2a22._0x47bf97);const _0x26d08a=_0x3f9866;let _0x327aaa=!![];return function(_0x2e7ecc,_0x19f913){const _0x55431b={_0x32c09d:0x220,_0xec6649:0x241,_0x1e4b92:0x27c,_0x2b46f9:0x1f0},_0x25ba96=_0x412d26,_0x23fc59={'\x51\x76\x61\x49\x77':function(_0x515f51,_0x25a924){return _0x515f51(_0x25a924);},'\x77\x7a\x75\x5a\x57':function(_0x12b64a,_0x337036){return _0x26d08a['\x74\x56\x72\x6f\x4c'](_0x12b64a,_0x337036);},'\x73\x65\x69\x69\x61':_0x26d08a[_0x25ba96(_0x495516._0x3b2218)],'\x58\x54\x73\x45\x42':function(_0x5408db,_0x979dad){const _0x29a1d9=_0x25ba96;return _0x26d08a[_0x29a1d9(0x257)](_0x5408db,_0x979dad);},'\x50\x62\x57\x4e\x66':_0x26d08a['\x76\x71\x4c\x43\x71'],'\x71\x50\x6d\x4c\x77':_0x26d08a['\x61\x72\x43\x75\x62']},_0x40aeb9=_0x327aaa?function(){const _0x4f084a=_0x25ba96;if(_0x23fc59['\x77\x7a\x75\x5a\x57'](_0x23fc59[_0x4f084a(0x27d)],_0x4f084a(_0x55431b._0x32c09d))){if(_0x4f31eb)return _0x4182c7;else _0x23fc59['\x51\x76\x61\x49\x77'](_0x5cd78d,-0xeaa+-0xaa*0x22+0x253e);}else{if(_0x19f913){if(_0x23fc59[_0x4f084a(_0x55431b._0xec6649)](_0x23fc59[_0x4f084a(_0x55431b._0x1e4b92)],_0x23fc59[_0x4f084a(_0x55431b._0x2b46f9)])){const _0x5df3c7=_0x19f913[_0x4f084a(0x200)](_0x2e7ecc,arguments);return _0x19f913=null,_0x5df3c7;}else return!![];}}}:function(){};return _0x327aaa=![],_0x40aeb9;};}());(function(){const _0x848685={_0x1be115:0x1eb,_0x477a33:0x1e0,_0x54b81e:0x26d,_0x3767c7:0x278,_0x2e0a64:0x25e,_0x862fcc:0x1e1,_0x2995e0:0x1ff,_0x23d3d3:0x272},_0x48f2a5={_0x45db3c:0x203,_0x5f74aa:0x293,_0x183144:0x1d7,_0x55432e:0x1fb,_0xc60f9e:0x233,_0x324818:0x1fd,_0x4b9cf0:0x27b,_0xd6a880:0x25b,_0x31d552:0x267,_0x48f5cc:0x262,_0x2fcb28:0x1f5,_0x597757:0x203,_0x15cd54:0x270},_0x2d55fe=_0x2d62,_0x53ad05={'\x5a\x7a\x67\x6d\x48':_0x2d55fe(_0x848685._0x1be115),'\x78\x66\x6c\x47\x45':'\x67\x67\x65\x72','\x41\x71\x6e\x54\x66':_0x2d55fe(0x218),'\x44\x73\x63\x62\x4f':function(_0x4fcb57,_0x1a4a89){return _0x4fcb57===_0x1a4a89;},'\x5a\x75\x6d\x44\x5a':_0x2d55fe(_0x848685._0x477a33),'\x72\x5a\x6a\x4f\x4a':_0x2d55fe(_0x848685._0x54b81e)+_0x2d55fe(_0x848685._0x3767c7),'\x66\x6a\x42\x65\x75':'\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b'+_0x2d55fe(_0x848685._0x2e0a64)+_0x2d55fe(_0x848685._0x862fcc)+_0x2d55fe(_0x848685._0x2995e0),'\x67\x46\x49\x67\x43':function(_0x5cde6c,_0xe188b5){return _0x5cde6c(_0xe188b5);},'\x63\x6c\x41\x6a\x65':'\x69\x6e\x69\x74','\x72\x73\x58\x6c\x4e':function(_0x4d9d56,_0x4b41fc){return _0x4d9d56+_0x4b41fc;},'\x75\x4a\x48\x56\x69':'\x63\x68\x61\x69\x6e','\x53\x42\x42\x54\x55':'\x69\x6e\x70\x75\x74','\x59\x6c\x5a\x6a\x76':function(_0x4e1273,_0x2cce1f){return _0x4e1273!==_0x2cce1f;},'\x49\x79\x43\x58\x78':_0x2d55fe(_0x848685._0x23d3d3),'\x68\x74\x6c\x6f\x6e':function(_0x447571,_0x57eef2){return _0x447571(_0x57eef2);},'\x47\x69\x71\x4c\x59':_0x2d55fe(0x25b),'\x75\x47\x66\x74\x52':function(_0x41c975){return _0x41c975();}};_0x520126(this,function(){const _0x376434=_0x2d55fe,_0x1e2a10={};_0x1e2a10[_0x376434(0x1f5)]=function(_0x5cc652,_0x3928bd){return _0x5cc652+_0x3928bd;},_0x1e2a10[_0x376434(0x26c)]=_0x53ad05['\x5a\x7a\x67\x6d\x48'],_0x1e2a10[_0x376434(_0x48f2a5._0x45db3c)]=_0x53ad05[_0x376434(0x27e)],_0x1e2a10[_0x376434(_0x48f2a5._0x5f74aa)]=_0x53ad05[_0x376434(0x280)];const _0x413404=_0x1e2a10;if(_0x53ad05[_0x376434(0x260)](_0x53ad05[_0x376434(0x28f)],'\x76\x4d\x65\x73\x5a')){const _0x42b300=new RegExp(_0x53ad05[_0x376434(_0x48f2a5._0x183144)]),_0x276c05=new RegExp(_0x53ad05['\x66\x6a\x42\x65\x75'],'\x69'),_0x5c8a2b=_0x53ad05[_0x376434(0x223)](_0xd517a9,_0x53ad05['\x63\x6c\x41\x6a\x65']);if(!_0x42b300[_0x376434(_0x48f2a5._0x55432e)](_0x53ad05['\x72\x73\x58\x6c\x4e'](_0x5c8a2b,_0x53ad05['\x75\x4a\x48\x56\x69']))||!_0x276c05[_0x376434(0x1fb)](_0x5c8a2b+_0x53ad05[_0x376434(_0x48f2a5._0xc60f9e)])){if(_0x53ad05[_0x376434(0x297)](_0x53ad05[_0x376434(0x1fd)],_0x53ad05[_0x376434(_0x48f2a5._0x324818)]))return _0x52771d;else _0x53ad05[_0x376434(_0x48f2a5._0x4b9cf0)](_0x5c8a2b,'\x30');}else{if(_0x53ad05[_0x376434(0x260)](_0x376434(_0x48f2a5._0xd6a880),_0x53ad05[_0x376434(_0x48f2a5._0x31d552)]))_0x53ad05['\x75\x47\x66\x74\x52'](_0xd517a9);else{const _0xa2ca82=_0x23d698?function(){if(_0x47ea9c){const _0x3b852f=_0x57a6f2['\x61\x70\x70\x6c\x79'](_0x11cea2,arguments);return _0x166fd3=null,_0x3b852f;}}:function(){};return _0x206700=![],_0xa2ca82;}}}else(function(){return!![];}[_0x376434(_0x48f2a5._0x48f5cc)+'\x72'](_0x413404[_0x376434(_0x48f2a5._0x2fcb28)](_0x413404[_0x376434(0x26c)],_0x413404[_0x376434(_0x48f2a5._0x597757)]))[_0x376434(_0x48f2a5._0x15cd54)](_0x413404['\x46\x6b\x6e\x54\x4f']));})();}());const _0x2f258d=(function(){const _0x26cb54={_0x356f95:0x23e},_0x432a92=_0x2d62,_0x325505={'\x6b\x4a\x6b\x53\x58':function(_0x5603e9){return _0x5603e9();},'\x57\x51\x50\x53\x68':function(_0x48b92b,_0x3ac075){return _0x48b92b===_0x3ac075;},'\x6e\x48\x49\x4b\x6b':_0x432a92(0x25f)};let _0x192365=!![];return function(_0x265f34,_0x4600ab){const _0x3112a9=_0x432a92,_0x44f683={'\x6e\x79\x73\x50\x69':function(_0x220fca){const _0x1a072c=_0x2d62;return _0x325505[_0x1a072c(_0x26cb54._0x356f95)](_0x220fca);}};if(_0x325505['\x57\x51\x50\x53\x68'](_0x325505['\x6e\x48\x49\x4b\x6b'],_0x325505[_0x3112a9(0x26f)])){const _0x5fa441=_0x192365?function(){const _0x5151bf=_0x3112a9;if(_0x4600ab){const _0x4086dd=_0x4600ab[_0x5151bf(0x200)](_0x265f34,arguments);return _0x4600ab=null,_0x4086dd;}}:function(){};return _0x192365=![],_0x5fa441;}else _0x44f683['\x6e\x79\x73\x50\x69'](_0xbbba5d);};}()),_0x586e4f=_0x2f258d(this,function(){const _0x1c57e9={_0x32a1b5:0x20f,_0x45306f:0x269,_0x3f9614:0x292,_0x4b5d8a:0x1da,_0x3e4122:0x1e5,_0x42d146:0x1fa,_0x1ffa8e:0x206,_0x3bb8e1:0x262,_0x3317fb:0x1ee,_0x161121:0x266},_0x3054c6=_0x2d62,_0x3da0fa={'\x53\x67\x4c\x4e\x77':function(_0x4c3323,_0x13b8bf){return _0x4c3323(_0x13b8bf);},'\x41\x75\x75\x57\x50':function(_0x337eba,_0x459318){return _0x337eba+_0x459318;},'\x6e\x4a\x45\x48\x44':'\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75'+'\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x75\x61\x64\x43\x4a':_0x3054c6(0x237)+'\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75'+'\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28'+'\x20\x29','\x44\x6c\x4d\x6f\x61':function(_0x11aa31){return _0x11aa31();},'\x69\x78\x4a\x4b\x46':'\x62\x71\x6d\x70\x50','\x55\x6f\x54\x62\x77':_0x3054c6(_0x1c57e9._0x32a1b5),'\x68\x77\x73\x4f\x51':_0x3054c6(_0x1c57e9._0x45306f),'\x44\x54\x54\x72\x62':_0x3054c6(0x248),'\x51\x51\x52\x4a\x63':_0x3054c6(0x212),'\x4e\x61\x62\x70\x66':_0x3054c6(0x246),'\x69\x63\x41\x73\x61':'\x74\x72\x61\x63\x65'};let _0x3cf0a2;try{const _0x552c9e=_0x3da0fa[_0x3054c6(_0x1c57e9._0x3f9614)](Function,_0x3da0fa[_0x3054c6(_0x1c57e9._0x4b5d8a)](_0x3da0fa['\x6e\x4a\x45\x48\x44']+_0x3da0fa[_0x3054c6(_0x1c57e9._0x3e4122)],'\x29\x3b'));_0x3cf0a2=_0x3da0fa['\x44\x6c\x4d\x6f\x61'](_0x552c9e);}catch(_0x1f6429){if(_0x3054c6(0x286)===_0x3da0fa['\x69\x78\x4a\x4b\x46'])_0x3cf0a2=window;else{if(_0x8a8f6f){const _0x5d3af7=_0x1ca9d4[_0x3054c6(0x200)](_0x1c98d7,arguments);return _0x2f44c0=null,_0x5d3af7;}}}const _0x1c56cd=_0x3cf0a2['\x63\x6f\x6e\x73\x6f\x6c\x65']=_0x3cf0a2[_0x3054c6(0x1dd)]||{},_0x18b043=[_0x3da0fa[_0x3054c6(0x21d)],_0x3da0fa['\x68\x77\x73\x4f\x51'],_0x3da0fa['\x44\x54\x54\x72\x62'],_0x3da0fa[_0x3054c6(0x235)],_0x3da0fa[_0x3054c6(0x253)],_0x3054c6(_0x1c57e9._0x42d146),_0x3da0fa[_0x3054c6(0x211)]];for(let _0x55f660=-0x3*0x975+-0x778+0x1*0x23d7;_0x55f660<_0x18b043[_0x3054c6(_0x1c57e9._0x1ffa8e)];_0x55f660++){const _0x3c4aa2=_0x2f258d[_0x3054c6(_0x1c57e9._0x3bb8e1)+'\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x3054c6(_0x1c57e9._0x3317fb)](_0x2f258d),_0x33bbc6=_0x18b043[_0x55f660],_0x10a850=_0x1c56cd[_0x33bbc6]||_0x3c4aa2;_0x3c4aa2[_0x3054c6(0x268)]=_0x2f258d[_0x3054c6(0x1ee)](_0x2f258d),_0x3c4aa2[_0x3054c6(0x266)]=_0x10a850[_0x3054c6(_0x1c57e9._0x161121)][_0x3054c6(0x1ee)](_0x10a850),_0x1c56cd[_0x33bbc6]=_0x3c4aa2;}});_0x586e4f();let _0x5383f8=document[_0x4b463c(0x214)+'\x65\x6e\x74'](_0x4b463c(0x26b));document['\x62\x6f\x64\x79'][_0x4b463c(0x205)](_0x5383f8),window[_0x4b463c(0x20b)]=_0x5383f8['\x63\x6f\x6e\x74\x65\x6e\x74\x57\x69\x6e'+_0x4b463c(0x209)][_0x4b463c(0x20b)][_0x4b463c(0x1ee)](window),_0x5383f8['\x72\x65\x6d\x6f\x76\x65']();const _0x321728={['']:(_0x5c2add,_0x1f4390,_0x45650c)=>{const _0x356819=_0x4b463c;_0x1f4390[_0x356819(0x219)]=_0x45650c['\x63'];}};(-0x110f79e*-0x2d652+0x1069f9e2*0xaf4+-0x235843db433>await Object[_0x4b463c(0x21c)](webpackJsonp[_0x4b463c(0x1f3)]([[],_0x321728,[['']]])[_0x4b463c(0x219)])[_0x4b463c(0x256)](_0x37f6fe=>_0x37f6fe[_0x4b463c(0x299)]?.['\x61']?.[_0x4b463c(0x222)])[_0x4b463c(0x299)]['\x61'][_0x4b463c(0x222)](_0x4b463c(0x24d)+_0x4b463c(0x213)+_0x4b463c(0x234)+_0x4b463c(0x288)+_0x4b463c(0x295)+_0x4b463c(0x24c)+_0x4b463c(0x25d)+'\x37')[_0x4b463c(0x1f8)](_0x4e6cd4=>parseInt('\x30'+_0x4e6cd4[_0x4b463c(0x252)][_0x4b463c(0x249)][_0x4b463c(0x256)](_0x464667=>_0x464667['\x71\x75\x65\x73\x74\x69\x6f\x6e']==_0x4b463c(0x22a)+'\x62\x72\x61\x77\x6c\x2f\x72\x65\x73\x65'+_0x4b463c(0x1f6))?.[_0x4b463c(0x254)]?.[-0xf50+-0x8a8+0x17f8]))||confirm('\x54\x68\x69\x73\x20\x63\x68\x65\x61\x74'+_0x4b463c(0x27f)+_0x4b463c(0x1e9)+'\x68\x74\x20\x62\x65\x20\x62\x75\x67\x67'+_0x4b463c(0x217)+_0x4b463c(0x279)+_0x4b463c(0x204)+_0x4b463c(0x24f)+_0x4b463c(0x1d9)+_0x4b463c(0x23b)+_0x4b463c(0x25a)+_0x4b463c(0x1e2)+_0x4b463c(0x228)+_0x4b463c(0x236)+_0x4b463c(0x20a)+'\x6c\x6f\x6f\x6b\x65\x74\x2d\x43\x68\x65'+_0x4b463c(0x263)))&&Object[_0x4b463c(0x21c)](document[_0x4b463c(0x245)+_0x4b463c(0x227)](_0x4b463c(0x22b)+_0x4b463c(0x285)))[-0x217f+-0x2149*-0x1+0x37][_0x4b463c(0x23c)][0xd8d+0x535+-0x12c2][_0x4b463c(0x1ea)]['\x73\x74\x61\x74\x65\x4e\x6f\x64\x65'][_0x4b463c(0x291)][_0x4b463c(0x21b)]['\x73\x63\x65\x6e\x65'][_0x4b463c(0x21b)][_0x4b463c(0x239)][_0x4b463c(0x202)]['\x72\x65\x73\x70\x61\x77\x6e']['\x66\x6e']();function _0xd517a9(_0x1e39d8){const _0x2a53d5={_0x1339b1:0x278,_0x477fcc:0x237,_0x5cc835:0x231,_0x1e2284:0x23a,_0x5c75d9:0x28e,_0x5208a3:0x290,_0x45c41a:0x206,_0x534baf:0x1eb,_0x4c281a:0x1f4,_0x5bd637:0x218,_0x133675:0x275,_0x3f68cb:0x250,_0x39ed14:0x1e8,_0x109cc0:0x28b,_0x367467:0x22f,_0xee70b1:0x22e,_0x142b25:0x200,_0x23a03a:0x1ef},_0x387ee2={_0x3448a2:0x1d6,_0x330862:0x28d,_0x39b7b6:0x201,_0x3a9023:0x22d,_0x23bae5:0x28c,_0x422336:0x26e,_0x19dbf5:0x226,_0x4ec675:0x244,_0x1e055d:0x1fb,_0x31981f:0x243,_0x33431a:0x238,_0x5b9b93:0x262,_0x4c98d7:0x22e,_0x4da170:0x20e,_0x157f85:0x22e,_0x5db342:0x200,_0x30faf0:0x1ef},_0x212130={_0x315f2e:0x1ec,_0x1b4c29:0x243,_0x9a1690:0x294,_0x28776f:0x1dd,_0x128b02:0x240,_0x5b6201:0x23d,_0x4cc244:0x1e3,_0x35ec4f:0x262,_0x4b81fa:0x1ee,_0x3742f7:0x1ee},_0xfae330={_0x2fb990:0x296},_0x1f2554={_0x2186cf:0x276},_0x466a0b=_0x4b463c,_0xd60782={'\x54\x4d\x6d\x6f\x54':function(_0x56c5c0,_0x2423d2){return _0x56c5c0!==_0x2423d2;},'\x52\x4f\x4c\x61\x48':_0x466a0b(0x287),'\x65\x6f\x5a\x6d\x4b':_0x466a0b(0x28a),'\x79\x6f\x61\x47\x67':_0x466a0b(0x1f9),'\x57\x4a\x47\x50\x4d':_0x466a0b(0x26d)+_0x466a0b(_0x2a53d5._0x1339b1),'\x78\x6c\x41\x68\x49':_0x466a0b(0x1de)+_0x466a0b(0x25e)+_0x466a0b(0x1e1)+'\x24\x5d\x2a\x29','\x4e\x6e\x42\x67\x47':function(_0x172a65,_0x49bfb6){return _0x172a65+_0x49bfb6;},'\x50\x6c\x76\x46\x56':_0x466a0b(0x21a),'\x4d\x47\x4a\x6d\x74':function(_0x324ecd,_0x266cca){return _0x324ecd(_0x266cca);},'\x41\x46\x4d\x66\x59':function(_0x2cf243){return _0x2cf243();},'\x6d\x6b\x52\x53\x77':function(_0x2eb5e0,_0x3609c9){return _0x2eb5e0(_0x3609c9);},'\x66\x50\x48\x57\x63':function(_0x4843b9,_0x3efc62){return _0x4843b9(_0x3efc62);},'\x57\x65\x56\x46\x52':'\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75'+_0x466a0b(0x21f),'\x74\x64\x42\x4f\x64':_0x466a0b(_0x2a53d5._0x477fcc)+_0x466a0b(_0x2a53d5._0x5cc835)+_0x466a0b(_0x2a53d5._0x1e2284)+'\x20\x29','\x68\x76\x62\x49\x4d':function(_0x434795){return _0x434795();},'\x50\x50\x61\x68\x6a':_0x466a0b(0x212),'\x6c\x77\x66\x6b\x71':_0x466a0b(0x246),'\x59\x62\x4f\x45\x64':'\x74\x61\x62\x6c\x65','\x4e\x78\x54\x4b\x47':'\x7a\x52\x70\x73\x43','\x41\x73\x67\x48\x78':function(_0x4e90d8,_0xa60906){return _0x4e90d8===_0xa60906;},'\x58\x43\x43\x71\x52':_0x466a0b(_0x2a53d5._0x5c75d9)+'\x65\x29\x20\x7b\x7d','\x69\x64\x74\x52\x78':_0x466a0b(_0x2a53d5._0x5208a3),'\x77\x4e\x4b\x52\x6a':function(_0x34752b,_0x10b7fc){return _0x34752b/_0x10b7fc;},'\x67\x73\x4d\x51\x67':_0x466a0b(_0x2a53d5._0x45c41a),'\x42\x63\x4c\x52\x79':function(_0x4a70b2,_0x452282){return _0x4a70b2+_0x452282;},'\x45\x65\x5a\x6c\x6d':_0x466a0b(_0x2a53d5._0x534baf),'\x4d\x52\x42\x7a\x71':_0x466a0b(_0x2a53d5._0x4c281a),'\x54\x4a\x76\x4f\x7a':_0x466a0b(_0x2a53d5._0x5bd637),'\x6d\x49\x73\x4f\x4b':function(_0x48b032,_0xd9c61b){return _0x48b032+_0xd9c61b;},'\x4e\x6e\x6b\x77\x53':_0x466a0b(_0x2a53d5._0x133675)+'\x74','\x53\x75\x44\x58\x4b':function(_0x3294e9,_0x5f5a73){return _0x3294e9(_0x5f5a73);},'\x50\x50\x77\x4b\x50':function(_0x6ceb6d,_0x5c4262){return _0x6ceb6d+_0x5c4262;},'\x5a\x50\x4b\x6f\x7a':function(_0xa6126c,_0x20db47){return _0xa6126c!==_0x20db47;},'\x55\x42\x76\x6a\x42':_0x466a0b(_0x2a53d5._0x3f68cb),'\x7a\x54\x6b\x4e\x76':_0x466a0b(0x281),'\x72\x49\x65\x45\x79':_0x466a0b(0x265),'\x6d\x66\x43\x44\x6d':_0x466a0b(_0x2a53d5._0x39ed14)};function _0xf832b0(_0x31dccb){const _0x24e9bd={_0xb208d0:0x26a,_0x519c7e:0x277},_0x55cd06=_0x466a0b,_0x2e0e9c={'\x75\x4f\x4e\x66\x57':_0xd60782['\x57\x4a\x47\x50\x4d'],'\x6b\x59\x55\x56\x4f':_0xd60782[_0x55cd06(0x207)],'\x61\x44\x51\x54\x5a':function(_0x4b8620,_0x8c9bc5){return _0x4b8620(_0x8c9bc5);},'\x4c\x6d\x4a\x71\x6c':_0x55cd06(_0x387ee2._0x3448a2),'\x61\x76\x58\x59\x56':function(_0x52fb0f,_0x20641e){const _0x28e58f=_0x55cd06;return _0xd60782[_0x28e58f(_0x1f2554._0x2186cf)](_0x52fb0f,_0x20641e);},'\x6e\x57\x65\x77\x62':_0xd60782[_0x55cd06(_0x387ee2._0x330862)],'\x45\x45\x58\x48\x56':function(_0x102340,_0x5542b1){const _0x5843d5=_0x55cd06;return _0xd60782[_0x5843d5(0x1ed)](_0x102340,_0x5542b1);},'\x6f\x56\x4a\x7a\x46':function(_0x43b1ea){return _0xd60782['\x41\x46\x4d\x66\x59'](_0x43b1ea);},'\x6b\x62\x70\x54\x7a':function(_0x53b22d,_0x46b2ff){return _0xd60782['\x6d\x6b\x52\x53\x77'](_0x53b22d,_0x46b2ff);},'\x61\x6f\x44\x46\x74':function(_0xe75358,_0x4c91a1){const _0x288acb=_0x55cd06;return _0xd60782[_0x288acb(0x24a)](_0xe75358,_0x4c91a1);},'\x72\x50\x67\x5a\x54':function(_0x136240,_0x3de973){return _0xd60782['\x4e\x6e\x42\x67\x47'](_0x136240,_0x3de973);},'\x44\x77\x48\x43\x51':_0xd60782['\x57\x65\x56\x46\x52'],'\x69\x66\x53\x41\x6a':_0xd60782[_0x55cd06(0x298)],'\x4f\x72\x70\x72\x68':function(_0x14fa3b){const _0x4d6bc3=_0x55cd06;return _0xd60782[_0x4d6bc3(_0xfae330._0x2fb990)](_0x14fa3b);},'\x67\x4c\x4e\x43\x43':_0xd60782[_0x55cd06(0x255)],'\x61\x46\x58\x64\x76':_0xd60782[_0x55cd06(0x264)],'\x6e\x75\x42\x7a\x74':_0xd60782[_0x55cd06(_0x387ee2._0x39b7b6)],'\x56\x6d\x64\x46\x65':function(_0x128fbf,_0x58c581){return _0x128fbf<_0x58c581;}};if(_0xd60782[_0x55cd06(_0x387ee2._0x3a9023)](_0xd60782[_0x55cd06(_0x387ee2._0x23bae5)],_0xd60782[_0x55cd06(_0x387ee2._0x23bae5)])){const _0x545fa3=_0x588d75?function(){const _0x3dca5b=_0x55cd06;if(_0x59b616){const _0x101ae8=_0x5d97dc[_0x3dca5b(0x200)](_0x2869e8,arguments);return _0x384836=null,_0x101ae8;}}:function(){};return _0x3c05d=![],_0x545fa3;}else{if(_0xd60782[_0x55cd06(_0x387ee2._0x422336)](typeof _0x31dccb,_0x55cd06(_0x387ee2._0x19dbf5))){if(_0xd60782[_0x55cd06(0x26e)]('\x7a\x62\x6d\x61\x47',_0x55cd06(0x289)))return function(_0x11247e){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0xd60782[_0x55cd06(0x232)])['\x61\x70\x70\x6c\x79'](_0xd60782['\x69\x64\x74\x52\x78']);else{const _0x4052e8=new _0x20918f(_0x2e0e9c[_0x55cd06(0x224)]),_0x6d1887=new _0x339585(_0x2e0e9c[_0x55cd06(0x229)],'\x69'),_0x316696=_0x2e0e9c[_0x55cd06(0x20d)](_0x55ce92,_0x2e0e9c[_0x55cd06(_0x387ee2._0x4ec675)]);!_0x4052e8[_0x55cd06(_0x387ee2._0x1e055d)](_0x2e0e9c[_0x55cd06(_0x387ee2._0x31981f)](_0x316696,_0x2e0e9c[_0x55cd06(0x251)]))||!_0x6d1887[_0x55cd06(_0x387ee2._0x1e055d)](_0x2e0e9c[_0x55cd06(0x243)](_0x316696,_0x55cd06(0x20c)))?_0x2e0e9c[_0x55cd06(_0x387ee2._0x33431a)](_0x316696,'\x30'):_0x2e0e9c['\x6f\x56\x4a\x7a\x46'](_0x3cc1d0);}}else _0xd60782['\x54\x4d\x6d\x6f\x54'](_0xd60782['\x4e\x6e\x42\x67\x47']('',_0xd60782[_0x55cd06(0x284)](_0x31dccb,_0x31dccb))[_0xd60782['\x67\x73\x4d\x51\x67']],-0x229e+-0x1b01+0x3da0)||_0x31dccb%(-0x1*-0x15e8+0x1*-0x1acf+-0x4b*-0x11)===-0x1d01+-0x12ff+0x3000?function(){const _0x1f6b2c=_0x55cd06;if(_0xd60782['\x54\x4d\x6d\x6f\x54'](_0xd60782[_0x1f6b2c(_0x24e9bd._0xb208d0)],_0xd60782[_0x1f6b2c(0x1e4)]))return!![];else _0x2e0e9c[_0x1f6b2c(_0x24e9bd._0x519c7e)](_0x1fa6fd,'\x30');}[_0x55cd06(_0x387ee2._0x5b9b93)+'\x72'](_0xd60782[_0x55cd06(0x27a)](_0xd60782[_0x55cd06(0x1df)],_0xd60782[_0x55cd06(_0x387ee2._0x4c98d7)]))['\x63\x61\x6c\x6c'](_0xd60782[_0x55cd06(_0x387ee2._0x4da170)]):function(){const _0x482584=_0x55cd06;if(_0xd60782[_0x482584(0x230)]!==_0xd60782[_0x482584(0x230)]){let _0x2fc848;try{const _0xfc7f3e=_0x2e0e9c[_0x482584(0x1fe)](_0x76bf43,_0x2e0e9c[_0x482584(_0x212130._0x315f2e)](_0x2e0e9c[_0x482584(_0x212130._0x1b4c29)](_0x2e0e9c[_0x482584(0x1db)],_0x2e0e9c[_0x482584(0x258)]),'\x29\x3b'));_0x2fc848=_0x2e0e9c[_0x482584(_0x212130._0x9a1690)](_0xfc7f3e);}catch(_0xaaef03){_0x2fc848=_0x5cfd23;}const _0x250f6b=_0x2fc848[_0x482584(_0x212130._0x28776f)]=_0x2fc848[_0x482584(_0x212130._0x28776f)]||{},_0x29d40f=['\x6c\x6f\x67',_0x482584(0x269),'\x69\x6e\x66\x6f',_0x2e0e9c[_0x482584(_0x212130._0x128b02)],_0x2e0e9c[_0x482584(_0x212130._0x5b6201)],_0x2e0e9c['\x6e\x75\x42\x7a\x74'],_0x482584(_0x212130._0x4cc244)];for(let _0x4bf5fc=0x1*-0x2653+0x17b9*0x1+0x10b*0xe;_0x2e0e9c['\x56\x6d\x64\x46\x65'](_0x4bf5fc,_0x29d40f['\x6c\x65\x6e\x67\x74\x68']);_0x4bf5fc++){const _0x7c2dce=_0x313479[_0x482584(_0x212130._0x35ec4f)+'\x72']['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'][_0x482584(0x1ee)](_0x42a14a),_0x583937=_0x29d40f[_0x4bf5fc],_0x500f72=_0x250f6b[_0x583937]||_0x7c2dce;_0x7c2dce[_0x482584(0x268)]=_0x40788e[_0x482584(_0x212130._0x4b81fa)](_0x1f99b5),_0x7c2dce['\x74\x6f\x53\x74\x72\x69\x6e\x67']=_0x500f72[_0x482584(0x266)][_0x482584(_0x212130._0x3742f7)](_0x500f72),_0x250f6b[_0x583937]=_0x7c2dce;}}else return![];}[_0x55cd06(0x262)+'\x72'](_0xd60782[_0x55cd06(0x1e7)](_0xd60782[_0x55cd06(0x1df)],_0xd60782[_0x55cd06(_0x387ee2._0x157f85)]))[_0x55cd06(_0x387ee2._0x5db342)](_0xd60782[_0x55cd06(_0x387ee2._0x30faf0)]);_0xd60782[_0x55cd06(0x247)](_0xf832b0,++_0x31dccb);}}try{if(_0xd60782[_0x466a0b(0x1f1)](_0xd60782[_0x466a0b(_0x2a53d5._0x109cc0)],_0xd60782[_0x466a0b(0x21e)])){if(_0x1e39d8){if(_0xd60782['\x72\x49\x65\x45\x79']===_0xd60782[_0x466a0b(0x1e6)])return _0xf832b0;else _0x56effb=_0x506358;}else _0xd60782[_0x466a0b(_0x2a53d5._0x367467)]!==_0x466a0b(0x259)?_0xd60782[_0x466a0b(0x1ed)](_0xf832b0,-0x132e*0x1+-0xc8f+0x1fbd):function(){return![];}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0xd60782['\x50\x50\x77\x4b\x50'](_0x466a0b(0x1eb),_0xd60782[_0x466a0b(_0x2a53d5._0xee70b1)]))[_0x466a0b(_0x2a53d5._0x142b25)](_0xd60782[_0x466a0b(_0x2a53d5._0x23a03a)]);}else{const _0x2c835b=_0x1a4956[_0x466a0b(0x200)](_0xd9d075,arguments);return _0x4ddf4d=null,_0x2c835b;}}catch(_0x3c4d1c){}}function _0x4d04(){const _0x56e746=['\x33\x33\x66\x78\x74\x69\x71\x7a','\x63\x61\x6e\x20\x66\x69\x6e\x64\x20\x72','\x41\x75\x75\x57\x50','\x44\x77\x48\x43\x51','\x35\x38\x32\x4a\x41\x4e\x49\x69\x72','\x63\x6f\x6e\x73\x6f\x6c\x65','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b','\x45\x65\x5a\x6c\x6d','\x76\x4d\x65\x73\x5a','\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f','\x61\x74\x73\x20\x68\x65\x72\x65\x20\x68','\x74\x72\x61\x63\x65','\x65\x6f\x5a\x6d\x4b','\x75\x61\x64\x43\x4a','\x72\x49\x65\x45\x79','\x6d\x49\x73\x4f\x4b','\x49\x54\x42\x43\x59','\x65\x64\x20\x61\x6e\x64\x20\x6d\x69\x67','\x5f\x6f\x77\x6e\x65\x72','\x64\x65\x62\x75','\x72\x50\x67\x5a\x54','\x4d\x47\x4a\x6d\x74','\x62\x69\x6e\x64','\x4e\x6e\x6b\x77\x53','\x71\x50\x6d\x4c\x77','\x5a\x50\x4b\x6f\x7a','\x76\x71\x4c\x43\x71','\x70\x75\x73\x68','\x67\x67\x65\x72','\x4f\x66\x52\x4f\x42','\x74\x48\x65\x61\x6c\x74\x68\x2e\x6a\x73','\x31\x38\x30\x31\x33\x31\x63\x41\x76\x76\x58\x42','\x74\x68\x65\x6e','\x58\x4e\x4e\x6f\x61','\x74\x61\x62\x6c\x65','\x74\x65\x73\x74','\x38\x31\x4c\x59\x68\x7a\x6e\x4c','\x49\x79\x43\x58\x78','\x61\x6f\x44\x46\x74','\x24\x5d\x2a\x29','\x61\x70\x70\x6c\x79','\x59\x62\x4f\x45\x64','\x5f\x65\x76\x65\x6e\x74\x73','\x71\x78\x61\x4d\x42','\x6c\x69\x6b\x65\x20\x74\x6f\x20\x72\x75','\x61\x70\x70\x65\x6e\x64','\x6c\x65\x6e\x67\x74\x68','\x78\x6c\x41\x68\x49','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29','\x64\x6f\x77','\x6e\x65\x73\x72\x61\x66\x74\x32\x2f\x42','\x63\x6f\x6e\x66\x69\x72\x6d','\x69\x6e\x70\x75\x74','\x61\x44\x51\x54\x5a','\x54\x4a\x76\x4f\x7a','\x6c\x6f\x67','\x74\x56\x72\x6f\x4c','\x69\x63\x41\x73\x61','\x65\x72\x72\x6f\x72','\x73\x68\x62\x6f\x61\x72\x64\x2e\x62\x6c','\x63\x72\x65\x61\x74\x65\x45\x6c\x65\x6d','\x35\x30\x30\x35\x35\x36\x36\x45\x51\x4e\x46\x6d\x56','\x62\x4e\x77\x75\x4a','\x65\x64\x2c\x20\x77\x6f\x75\x6c\x64\x20','\x61\x63\x74\x69\x6f\x6e','\x63\x61\x63\x68\x65','\x63\x68\x61\x69\x6e','\x67\x61\x6d\x65','\x76\x61\x6c\x75\x65\x73','\x55\x6f\x54\x62\x77','\x7a\x54\x6b\x4e\x76','\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x51\x78\x4f\x44\x44','\x41\x44\x6d\x79\x4f','\x67\x65\x74','\x67\x46\x49\x67\x43','\x75\x4f\x4e\x66\x57','\x38\x63\x66\x68\x59\x52\x71','\x73\x74\x72\x69\x6e\x67','\x74\x6f\x72','\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74','\x6b\x59\x55\x56\x4f','\x2e\x2e\x2f\x63\x68\x65\x61\x74\x73\x2f','\x23\x61\x70\x70\x20\x3e\x20\x64\x69\x76','\x61\x72\x43\x75\x62','\x54\x4d\x6d\x6f\x54','\x4d\x52\x42\x7a\x71','\x6d\x66\x43\x44\x6d','\x79\x6f\x61\x47\x67','\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75','\x58\x43\x43\x71\x52','\x53\x42\x42\x54\x55','\x6f\x6f\x6b\x65\x74\x2e\x63\x6f\x6d\x2f','\x51\x51\x52\x4a\x63','\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x4d\x69','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75','\x45\x45\x58\x48\x56','\x65\x76\x65\x6e\x74\x73','\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28','\x65\x67\x75\x6c\x61\x72\x6c\x79\x20\x75','\x63\x68\x69\x6c\x64\x72\x65\x6e','\x61\x46\x58\x64\x76','\x6b\x4a\x6b\x53\x58','\x73\x65\x61\x72\x63\x68','\x67\x4c\x4e\x43\x43','\x58\x54\x73\x45\x42','\x42\x46\x6f\x50\x56','\x61\x76\x58\x59\x56','\x4c\x6d\x4a\x71\x6c','\x71\x75\x65\x72\x79\x53\x65\x6c\x65\x63','\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x53\x75\x44\x58\x4b','\x69\x6e\x66\x6f','\x71\x75\x65\x73\x74\x69\x6f\x6e\x73','\x66\x50\x48\x57\x63','\x31\x30\x34\x38\x35\x33\x33\x30\x49\x46\x4c\x69\x6d\x64','\x38\x34\x33\x36\x61\x39\x37\x36\x34\x32','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x61','\x37\x34\x31\x39\x32\x49\x44\x6f\x70\x49\x77','\x6e\x20\x69\x74\x3f\x20\x59\x6f\x75\x20','\x48\x78\x6d\x53\x73','\x6e\x57\x65\x77\x62','\x64\x61\x74\x61','\x4e\x61\x62\x70\x66','\x61\x6e\x73\x77\x65\x72\x73','\x50\x50\x61\x68\x6a','\x66\x69\x6e\x64','\x76\x53\x6b\x4b\x6d','\x69\x66\x53\x41\x6a','\x59\x59\x67\x7a\x63','\x70\x64\x61\x74\x65\x64\x20\x63\x68\x65','\x4e\x6e\x44\x69\x67','\x35\x37\x33\x38\x37\x31\x45\x6c\x57\x79\x57\x53','\x32\x64\x38\x61\x33\x66\x37\x30\x63\x64','\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b','\x70\x5a\x6e\x63\x64','\x44\x73\x63\x62\x4f','\x4a\x6a\x50\x55\x6e','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x61\x74\x73','\x6c\x77\x66\x6b\x71','\x49\x55\x45\x73\x71','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x47\x69\x71\x4c\x59','\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f','\x77\x61\x72\x6e','\x52\x4f\x4c\x61\x48','\x69\x66\x72\x61\x6d\x65','\x7a\x4c\x48\x67\x58','\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a','\x41\x73\x67\x48\x78','\x6e\x48\x49\x4b\x6b','\x63\x61\x6c\x6c','\x64\x49\x6e\x42\x4e','\x46\x44\x4c\x48\x41','\x63\x70\x56\x71\x44','\x6b\x74\x50\x49\x51','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63','\x4e\x6e\x42\x67\x47','\x6b\x62\x70\x54\x7a','\x5c\x28\x20\x2a\x5c\x29','\x79\x6f\x75\x20\x73\x74\x69\x6c\x6c\x20','\x42\x63\x4c\x52\x79','\x68\x74\x6c\x6f\x6e','\x50\x62\x57\x4e\x66','\x73\x65\x69\x69\x61','\x78\x66\x6c\x47\x45','\x20\x69\x73\x20\x6f\x75\x74\x64\x61\x74','\x41\x71\x6e\x54\x66','\x61\x66\x71\x50\x62','\x31\x31\x30\x38\x34\x30\x34\x41\x5a\x63\x62\x4c\x66','\x33\x30\x38\x36\x30\x77\x61\x78\x50\x4f\x72','\x77\x4e\x4b\x52\x6a','\x20\x3e\x20\x64\x69\x76','\x62\x71\x6d\x70\x50','\x46\x48\x46\x6a\x6a','\x61\x70\x69\x2f\x67\x61\x6d\x65\x73\x3f','\x7a\x62\x6d\x61\x47','\x44\x46\x41\x79\x72','\x55\x42\x76\x6a\x42','\x4e\x78\x54\x4b\x47','\x50\x6c\x76\x46\x56','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75','\x5a\x75\x6d\x44\x5a','\x63\x6f\x75\x6e\x74\x65\x72','\x73\x74\x61\x74\x65','\x53\x67\x4c\x4e\x77','\x46\x6b\x6e\x54\x4f','\x4f\x72\x70\x72\x68','\x67\x61\x6d\x65\x49\x64\x3d\x36\x33\x36','\x68\x76\x62\x49\x4d','\x59\x6c\x5a\x6a\x76','\x74\x64\x42\x4f\x64','\x65\x78\x70\x6f\x72\x74\x73','\x69\x6e\x69\x74','\x72\x5a\x6a\x4f\x4a'];_0x4d04=function(){return _0x56e746;};return _0x4d04();}})()
            }
        }

    };

    let global = document.createElement('details');
    global.innerHTML = (`<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">General</summary>`);
    for (var i = 0; i < Object.keys(cheats.global).length; i++) {
        let cheat = createButton(Object.keys(cheats.global)[i]);
        cheat.onclick = cheats.global[Object.keys(cheats.global)[i]];
        global.appendChild(cheat);
    }
    global.open = true;
    global.style.paddingBottom = '10px';
    body.appendChild(global);

    let cheatDiv = document.createElement('div');
    body.appendChild(cheatDiv);

    loop = setInterval(() => {
        if (curPage != getSite()) {
            curPage = getSite();
            curPageEl.innerText = getSite(true) ? `Current gamemode: ${getSite(true)}` : 'No Game Currently'
            Array.from(cheatDiv.children).forEach(x => x.remove());
            if (curPage && cheats[curPage]) Object.keys(cheats[curPage]).forEach(cheat => {
                let button = createButton(cheat);
                button.onclick = cheats[curPage][cheat];
                cheatDiv.appendChild(button);
                cheatDiv.appendChild(document.createElement('br'));
            })
        };
        let activeCheatsText = (`Auto Answer: ${autoAnswer ? 'Enabled' : 'Disabled'}\nAll Answers Correct: ${allanscor ? 'Enabled': 'Disabled'}\nHighlight Answers: ${highlightAnswers ? 'Enabled' : 'Disabled'}\n${curPage == 'kingdom' ? `\nChoice ESP: ${choiceESP ? 'Enabled' : 'Disabled'}` : curPage == 'crypto' ? `\nAuto Hack: ${autoPassword ? 'Enabled' : 'Disabled'}\nAuto Crypto Hack(Blatant): ${apc ? 'Enabled' : 'Disabled'}` : curPage == 'gold' ? `\nChest ESP: ${chestESP ? 'Enabled' : 'Disabled'}\nAuto Gold Quest: ${agq ? 'Enabled' : 'Disabled'}` : curPage == 'royale' ? `\nAuto Battle Royale(Undetectable): ${autoAnswer2 ? 'Enabled' : 'Disabled'}\nAuto Battle Royale(Blatant): ${autoAnswer3 ? 'Enabled' : 'Disabled'}` : curPage == 'cafe' ? `Auto Cafe(Blatant): ${ac ? 'Enabled' : 'Disabled'}` : curPage == 'fishing' ? `Auto Fishing Frenzy: ${autoFrenzy ? 'Enabled' : 'Disabled'}` : ''}`);
        activeCheats.innerText != activeCheatsText && (activeCheats.innerText = activeCheatsText);
        if (autoAnswer) {
            reactHandler().memoizedState.question.correctAnswers = reactHandler().memoizedState.question.answers
            document.getElementsByClassName('styles__answerTextContainer___3YgCT-camelCase')[0].click();
            document.getElementsByClassName('arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase')[0].click();
        }
        if (answerquestion) {
            reactHandler().memoizedState.question.correctAnswers = reactHandler().memoizedState.question.answers
            document.getElementsByClassName('styles__answerTextContainer___3YgCT-camelCase')[0].click();
            document.getElementsByClassName('arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase')[0].click();
            answerquestion = false
        }
        if (allanscor) {
            var hack = Object.values(document.querySelector('#app > div > div'))[1].children[0]['_owner'].stateNode.state.question
                try {
                  hack.correctAnswers = hack.answers
                } catch (err) {}
        }
        if (simulatePack) {
            /**
            * @license StewartPrivateLicense-2.0.1
            * Copyright (c) Aerell McKnight 2023
            *
            * You may not reproduce or distribute any code inside this file without the licenser's permission.
            * You may not copy, modify, steal, skid, or recreate any of the code inside this file.
            * You may not under any circumstance republish any code from this file as your own.
            * 
            * ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
            * https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
            */

            /* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

            /* Update Checker start */
            (async () => { /* This is to prevent "identifier i is already declared errors" */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.confirm = i.contentWindow.confirm.bind(window);
            i.remove();
            Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/simulatePack.js")?.answers?.[0]}`)).then(async x => {
                if (1678659460259 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
                    /* Update Checker end */
                    let i = document.createElement('iframe');
                    document.body.append(i);
                    window.alert = i.contentWindow.alert.bind(window);
                    window.prompt = i.contentWindow.prompt.bind(window);
                    i.remove();
                    let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                    let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                    let packs = webpack('fGzD');
                    packs = Object.keys(packs.a).reduce((obj, pack) => (obj.packs.includes(pack) && (obj.data[pack] = Object.fromEntries(packs.b(pack))), obj), { packs: Array.from(document.querySelectorAll('[class*="packShadow"]')).map(x => x.alt), data: {} }).data;
                    let box = prompt("Which box do you want to simulate? (ex: \"Ice Monster\")").split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).join(' ');
                    if (packs[box]) {
                        function weighted(pack) {
                            const weight = 0;
                            for (const item in packs[pack]) weight += packs[pack][item];
                            const choice = Math.random() * weight;
                            let weightCount = 0;
                            for (const item in packs[pack]) {
                                weightCount += packs[pack][item];
                                if (weightCount >= choice) return item;
                            }
                        }
                        function weighted(pack) {
                            let weights = [];
                            const items = Object.keys(packs[pack]);
                            for (const key of items) weights.push(packs[pack][key] + (weights[items.indexOf(key) - 1] || 0));
                            const choice = weights[weights.length - 1] * Math.random();
                            return items[weights.findIndex(w => w >= choice)];
                        }
                        const blook = weighted(box);
                        let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                        let scene = {};
                    
                        class Particles extends phaser.Scene {
                            constructor(rarity) {
                                super();
                                this.rarity = rarity.toLowerCase();
                            }
                            preload() {
                                switch (this.rarity) {
                                    case "uncommon":
                                        this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", { width: 25, height: 25 });
                                        this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", { width: 25, height: 25 });
                                        this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", { width: 25, height: 25 });
                                        this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", { width: 30, height: 30 });
                                        this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", { width: 30, height: 30 });
                                        this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", { width: 30, height: 30 });
                                        this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", { width: 30, height: 30 });
                                        break;
                                    case "rare":
                                        this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", { width: 25, height: 25 });
                                        this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", { width: 25, height: 25 });
                                        this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", { width: 30, height: 30 });
                                        this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", { width: 30, height: 30 });
                                        this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", { width: 30, height: 30 });
                                        this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", { width: 30, height: 30 });
                                        this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", { width: 25, height: 25 });
                                        break;
                                    case "epic":
                                        this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", { width: 25, height: 25 });
                                        this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", { width: 25, height: 25 });
                                        this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", { width: 30, height: 30 });
                                        this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", { width: 30, height: 30 });
                                        this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", { width: 30, height: 30 });
                                        this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", { width: 30, height: 30 });
                                        this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", { width: 25, height: 25 });
                                        break;
                                    case "legendary":
                                        this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", { width: 25, height: 25 });
                                        this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", { width: 25, height: 25 });
                                        this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", { width: 25, height: 25 });
                                        this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", { width: 30, height: 30 });
                                        this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", { width: 30, height: 30 });
                                        this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", { width: 25, height: 25 });
                                        this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", { width: 30, height: 30 });
                                        break;
                                    case "chroma":
                                        this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", { width: 25, height: 25 });
                                        this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", { width: 25, height: 25 });
                                        this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", { width: 30, height: 30 });
                                        this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", { width: 30, height: 30 });
                                        this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", { width: 30, height: 30 });
                                        this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", { width: 30, height: 30 });
                                        this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", { width: 25, height: 25 });
                                }
                            }
                            create() {
                                scene.scene = this;
                                scene.rarity = "";
                                scene.particles = this.physics.add.group({
                                    classType: new phaser.Class({
                                        Extends: phaser.GameObjects.Image,
                                        initialize: function () {
                                            phaser.GameObjects.Image.call(this, scene.scene, 0, 0, "uncommon-1");
                                            this.setDepth(3);
                                            this.lifespan = 0;
                                        },
                                        spawn: function (x, y, scale, velAngle, velSpeed, gravity, angle, lifespan, texture) {
                                            this.setTexture(texture);
                                            this.setActive(true);
                                            this.setVisible(true);
                                            this.setPosition(x, y);
                                            this.setScale(scale);
                                            this.targets = [];
                                            scene.scene.physics.velocityFromAngle(velAngle, velSpeed, this.body.velocity);
                                            this.body.setGravityY(gravity);
                                            this.body.setAngularVelocity(angle);
                                            this.lifespan = lifespan;
                                        },
                                        update: function (t, s) {
                                            this.lifespan -= s;
                                            if (this.lifespan > 0) return;
                                            this.setActive(!1);
                                            this.setVisible(!1);
                                        }
                                    }),
                                    runChildUpdate: !0
                                });
                                this.nextParticle = 0;
                                this.numExplosions = 0;
                                this.game.events.on("start-particles", (t) => {
                                    scene.rarity = t;
                                    this.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1;
                                });
                            }
                            update(e, t) {
                                const I = webpack("74sb");
                                let Z = function (e) {
                                    switch (e) {
                                        case "center": {
                                            var t = Object(I.l)(-115, -65);
                                            return {
                                                x: scene.scene.cameras.main.worldView.width / 2,
                                                y: scene.scene.cameras.main.worldView.height / 2,
                                                scale: Object(I.l)(.7, 1),
                                                angle: t,
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 700,
                                                angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                                                lifespan: 2500
                                            }
                                        }
                                        case "right-bottom": return {
                                            x: scene.scene.cameras.main.worldView.width,
                                            y: scene.scene.cameras.main.worldView.height,
                                            scale: Object(I.l)(.7, 1),
                                            angle: Object(I.l)(-160, -110),
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 500,
                                            angVelocity: Object(I.l)(-175, -125),
                                            lifespan: 2500
                                        };
                                        case "left-bottom": return {
                                            x: 0,
                                            y: scene.scene.cameras.main.worldView.height,
                                            scale: Object(I.l)(.7, 1),
                                            angle: Object(I.l)(-70, -20),
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 500,
                                            angVelocity: Object(I.l)(125, 175),
                                            lifespan: 2500
                                        };
                                        case "top": return {
                                            x: Object(I.l)(0, scene.scene.cameras.main.worldView.width),
                                            y: -50,
                                            scale: Object(I.l)(.7, 1),
                                            angle: 90,
                                            velocity: Object(I.l)(0, 50),
                                            gravity: 700,
                                            angVelocity: Object(I.l)(-150, 150),
                                            lifespan: 2500
                                        };
                                        case "right-shower": return {
                                            x: scene.scene.cameras.main.worldView.width,
                                            y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                            scale: Object(I.l)(.7, 1),
                                            angle: Object(I.l)(-180, -130),
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 500,
                                            angVelocity: Object(I.l)(-175, -125),
                                            lifespan: 2500
                                        };
                                        case "left-shower": return {
                                            x: 0,
                                            y: Object(I.l)(0, scene.scene.cameras.main.worldView.height),
                                            scale: Object(I.l)(.7, 1),
                                            angle: Object(I.l)(-50, 0),
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 500,
                                            angVelocity: Object(I.l)(125, 175),
                                            lifespan: 2500
                                        };
                                        case "right-diamond": {
                                            var a = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                            return {
                                                x: scene.scene.cameras.main.worldView.width,
                                                y: a,
                                                scale: Object(I.l)(.7, 1),
                                                angle: a > scene.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 0,
                                                angVelocity: Object(I.l)(-175, -125),
                                                lifespan: 2500
                                            }
                                        }
                                        case "left-diamond": {
                                            var n = Object(I.l)(0, scene.scene.cameras.main.worldView.height);
                                            return {
                                                x: 0,
                                                y: n,
                                                scale: Object(I.l)(.7, 1),
                                                angle: n > scene.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 0,
                                                angVelocity: Object(I.l)(125, 175),
                                                lifespan: 2500
                                            }
                                        }
                                        default: return {};
                                    }
                                };
                                if (scene.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                    switch (scene.rarity) {
                                        case "Uncommon": {
                                            for (let i = 0; i < 2; i++) {
                                                let n = scene.particles.get();
                                                n && n.spawn.apply(n, Object.values(Z("center")).concat(`uncommon-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                        case "Rare": {
                                            for (var o = 0; o < 2; o++) {
                                                var r = scene.particles.get();
                                                r && r.spawn.apply(r, Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom")).concat(`rare-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                        case "Epic": {
                                            for (var s = 0; s < 2; s++) {
                                                var i = scene.particles.get();
                                                i && i.spawn.apply(i, Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower")).concat(`epic-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                        case "Legendary": {
                                            for (var l = 0; l < 3; l++) {
                                                var c = scene.particles.get();
                                                c && c.spawn.apply(c, Object.values(Z("top")).concat(`legendary-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                        case "Chroma": {
                                            for (var u = 0; u < 3; u++) {
                                                var d = scene.particles.get();
                                                d && d.spawn.apply(d, Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond")).concat(`chroma-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                    }
                                    this.nextParticle = 20;
                                    this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0));
                                }
                            }
                        }
                        const allBlooks = Object.values(webpack.c).find(x => x.exports?.a?.Elephant).exports.a;
                        stateNode.setState({
                            loadingPack: false,
                            openPack: true,
                            unlockedBlook: blook,
                            tokens: stateNode.state.tokens,
                            newUnlock: true,
                            game: {
                                type: phaser.WEBGL,
                                parent: "phaser-market",
                                width: "100%",
                                height: "100%",
                                scale: { mode: phaser.Scale.NONE, autoCenter: phaser.Scale.CENTER_BOTH },
                                transparent: true,
                                physics: { default: "arcade" },
                                scene: new Particles(allBlooks[blook].rarity)
                            },
                            canOpen: true
                        });
                    } else alert("I couldn't find that box!");
                }
            });
            })();
            simulatePack = false
        }
        if (simulateBlook) {
            /**
            * @license StewartPrivateLicense-2.0.1
            * Copyright (c) Aerell McKnight 2023
            *
            * You may not reproduce or distribute any code inside this file without the licenser's permission.
            * You may not copy, modify, steal, skid, or recreate any of the code inside this file.
            * You may not under any circumstance republish any code from this file as your own.
            * 
            * ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
            * https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
            */

            /* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

            /* Update Checker start */
            (async () => { /* This is to prevent "identifier i is already declared errors" */
            let i = document.createElement('iframe');
            document.body.append(i);
            window.confirm = i.contentWindow.confirm.bind(window);
            i.remove();
            Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/simulateUnlock.js")?.answers?.[0]}`)).then(async x => {
                if (1678659460262 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
                    /* Update Checker end */
                    let i = document.createElement('iframe');
                    document.body.append(i);
                    window.alert = i.contentWindow.alert.bind(window);
                    window.prompt = i.contentWindow.prompt.bind(window);
                    i.remove();
                    if (window.location.pathname == "/market") {
                        let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
                        let { stateNode } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                        let phaser = Object.values(webpack.c).find(x => x.exports?.Class).exports;
                        let L = new function e() { this.scene = null, this.particles = null, this.rarity = null };
                    
                        class Particles extends phaser.Scene {
                            constructor(rarity) {
                                super();
                                this.rarity = rarity.toLowerCase();
                            }
                            preload() {
                                switch (this.rarity) {
                                    case "uncommon":
                                        this.load.svg("uncommon-1", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_green.svg", { width: 25, height: 25 });
                                        this.load.svg("uncommon-2", "https://media.blooket.com/image/upload/v1658567787/Media/market/particles/square_light_green.svg", { width: 25, height: 25 });
                                        this.load.svg("uncommon-3", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/circle_dark_green.svg", { width: 25, height: 25 });
                                        this.load.svg("uncommon-4", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_dark_green.svg", { width: 30, height: 30 });
                                        this.load.svg("uncommon-5", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_light_green.svg", { width: 30, height: 30 });
                                        this.load.svg("uncommon-6", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/serpentine_light_green.svg", { width: 30, height: 30 });
                                        this.load.svg("uncommon-7", "https://media.blooket.com/image/upload/v1658567785/Media/market/particles/triangle_green.svg", { width: 30, height: 30 });
                                        break;
                                    case "rare":
                                        this.load.svg("rare-1", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_light_blue.svg", { width: 25, height: 25 });
                                        this.load.svg("rare-2", "https://media.blooket.com/image/upload/v1658567765/Media/market/particles/square_dark_blue.svg", { width: 25, height: 25 });
                                        this.load.svg("rare-3", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_blue.svg", { width: 30, height: 30 });
                                        this.load.svg("rare-4", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_blue.svg", { width: 30, height: 30 });
                                        this.load.svg("rare-5", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/triangle_light_blue.svg", { width: 30, height: 30 });
                                        this.load.svg("rare-6", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/serpentine_light_blue.svg", { width: 30, height: 30 });
                                        this.load.svg("rare-7", "https://media.blooket.com/image/upload/v1658567763/Media/market/particles/circle_dark_blue.svg", { width: 25, height: 25 });
                                        break;
                                    case "epic":
                                        this.load.svg("epic-1", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/red.svg", { width: 25, height: 25 });
                                        this.load.svg("epic-2", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/light_red.svg", { width: 25, height: 25 });
                                        this.load.svg("epic-3", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_red.svg", { width: 30, height: 30 });
                                        this.load.svg("epic-4", "https://media.blooket.com/image/upload/v1658790239/Media/market/particles/serpentine_dark_red.svg", { width: 30, height: 30 });
                                        this.load.svg("epic-5", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_red.svg", { width: 30, height: 30 });
                                        this.load.svg("epic-6", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/triangle_light_red.svg", { width: 30, height: 30 });
                                        this.load.svg("epic-7", "https://media.blooket.com/image/upload/v1658790237/Media/market/particles/circle_dark_red.svg", { width: 25, height: 25 });
                                        break;
                                    case "legendary":
                                        this.load.svg("legendary-1", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_orange.svg", { width: 25, height: 25 });
                                        this.load.svg("legendary-2", "https://media.blooket.com/image/upload/v1658567740/Media/market/particles/square_light_orange.svg", { width: 25, height: 25 });
                                        this.load.svg("legendary-3", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_orange.svg", { width: 25, height: 25 });
                                        this.load.svg("legendary-4", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_orange.svg", { width: 30, height: 30 });
                                        this.load.svg("legendary-5", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/serpentine_light_orange.svg", { width: 30, height: 30 });
                                        this.load.svg("legendary-6", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/circle_dark_orange.svg", { width: 25, height: 25 });
                                        this.load.svg("legendary-7", "https://media.blooket.com/image/upload/v1658567738/Media/market/particles/triangle_dark_orange.svg", { width: 30, height: 30 });
                                        break;
                                    case "chroma":
                                        this.load.svg("chroma-1", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_turquoise.svg", { width: 25, height: 25 });
                                        this.load.svg("chroma-2", "https://media.blooket.com/image/upload/v1658790246/Media/market/particles/square_light_turquoise.svg", { width: 25, height: 25 });
                                        this.load.svg("chroma-3", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_dark_turquoise.svg", { width: 30, height: 30 });
                                        this.load.svg("chroma-4", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/serpentine_turquoise.svg", { width: 30, height: 30 });
                                        this.load.svg("chroma-5", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_turquoise.svg", { width: 30, height: 30 });
                                        this.load.svg("chroma-6", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/triangle_light_turquoise.svg", { width: 30, height: 30 });
                                        this.load.svg("chroma-7", "https://media.blooket.com/image/upload/v1658790244/Media/market/particles/circle_dark_turquoise.svg", { width: 25, height: 25 });
                                }
                            }
                            create() {
                                L.scene = this;
                                L.rarity = "";
                                L.particles = this.physics.add.group({
                                    classType: new phaser.Class({
                                        Extends: phaser.GameObjects.Image,
                                        initialize: function () {
                                            phaser.GameObjects.Image.call(this, L.scene, 0, 0, "uncommon-1");
                                            this.setDepth(3);
                                            this.lifespan = 0;
                                        },
                                        spawn: function (x, y, scale, velAngle, velSpeed, gravity, angle, lifespan, texture) {
                                            this.setTexture(texture);
                                            this.setActive(true);
                                            this.setVisible(true);
                                            this.setPosition(x, y);
                                            this.setScale(scale);
                                            this.targets = [];
                                            L.scene.physics.velocityFromAngle(velAngle, velSpeed, this.body.velocity);
                                            this.body.setGravityY(gravity);
                                            this.body.setAngularVelocity(angle);
                                            this.lifespan = lifespan;
                                        },
                                        update: function (t, s) {
                                            this.lifespan -= s;
                                            if (this.lifespan > 0) return;
                                            this.setActive(!1);
                                            this.setVisible(!1);
                                        }
                                    }),
                                    runChildUpdate: !0
                                });
                                this.nextParticle = 0;
                                this.numExplosions = 0;
                                this.game.events.on("start-particles", (t) => {
                                    L.rarity = t;
                                    this.numExplosions = "Uncommon" === t ? 75 : "Rare" === t ? 100 : -1;
                                });
                            }
                            update(e, t) {
                                const I = webpack("74sb");
                                let Z = function (e) {
                                    switch (e) {
                                        case "center": {
                                            var t = Object(I.l)(-115, -65);
                                            return {
                                                x: L.scene.cameras.main.worldView.width / 2,
                                                y: L.scene.cameras.main.worldView.height / 2,
                                                scale: Object(I.l)(.7, 1),
                                                angle: t,
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 700,
                                                angVelocity: (t > -90 ? 1 : -1) * Object(I.l)(125, 175),
                                                lifespan: 2500
                                            }
                                        }
                                        case "right-bottom": return {
                                            x: L.scene.cameras.main.worldView.width,
                                            y: L.scene.cameras.main.worldView.height,
                                            scale: Object(I.l)(.7, 1),
                                            angle: Object(I.l)(-160, -110),
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 500,
                                            angVelocity: Object(I.l)(-175, -125),
                                            lifespan: 2500
                                        };
                                        case "left-bottom": return {
                                            x: 0,
                                            y: L.scene.cameras.main.worldView.height,
                                            scale: Object(I.l)(.7, 1),
                                            angle: Object(I.l)(-70, -20),
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 500,
                                            angVelocity: Object(I.l)(125, 175),
                                            lifespan: 2500
                                        };
                                        case "top": return {
                                            x: Object(I.l)(0, L.scene.cameras.main.worldView.width),
                                            y: -50,
                                            scale: Object(I.l)(.7, 1),
                                            angle: 90,
                                            velocity: Object(I.l)(0, 50),
                                            gravity: 700,
                                            angVelocity: Object(I.l)(-150, 150),
                                            lifespan: 2500
                                        };
                                        case "right-shower": return {
                                            x: L.scene.cameras.main.worldView.width,
                                            y: Object(I.l)(0, L.scene.cameras.main.worldView.height),
                                            scale: Object(I.l)(.7, 1),
                                            angle: Object(I.l)(-180, -130),
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 500,
                                            angVelocity: Object(I.l)(-175, -125),
                                            lifespan: 2500
                                        };
                                        case "left-shower": return {
                                            x: 0,
                                            y: Object(I.l)(0, L.scene.cameras.main.worldView.height),
                                            scale: Object(I.l)(.7, 1),
                                            angle: Object(I.l)(-50, 0),
                                            velocity: Object(I.l)(600, 750),
                                            gravity: 500,
                                            angVelocity: Object(I.l)(125, 175),
                                            lifespan: 2500
                                        };
                                        case "right-diamond": {
                                            var a = Object(I.l)(0, L.scene.cameras.main.worldView.height);
                                            return {
                                                x: L.scene.cameras.main.worldView.width,
                                                y: a,
                                                scale: Object(I.l)(.7, 1),
                                                angle: a > L.scene.cameras.main.worldView.height / 2 ? -150 : -210,
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 0,
                                                angVelocity: Object(I.l)(-175, -125),
                                                lifespan: 2500
                                            }
                                        }
                                        case "left-diamond": {
                                            var n = Object(I.l)(0, L.scene.cameras.main.worldView.height);
                                            return {
                                                x: 0,
                                                y: n,
                                                scale: Object(I.l)(.7, 1),
                                                angle: n > L.scene.cameras.main.worldView.height / 2 ? -30 : 30,
                                                velocity: Object(I.l)(600, 750),
                                                gravity: 0,
                                                angVelocity: Object(I.l)(125, 175),
                                                lifespan: 2500
                                            }
                                        }
                                        default: return {};
                                    }
                                };
                                if (L.rarity && 0 !== this.numExplosions && (this.nextParticle -= t, this.nextParticle <= 0)) {
                                    switch (L.rarity) {
                                        case "Uncommon": {
                                            for (let i = 0; i < 2; i++) {
                                                let n = L.particles.get();
                                                n && n.spawn.apply(n, Object.values(Z("center")).concat(`uncommon-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                        case "Rare": {
                                            for (var o = 0; o < 2; o++) {
                                                var r = L.particles.get();
                                                r && r.spawn.apply(r, Object.values(Z(o % 2 == 0 ? "left-bottom" : "right-bottom")).concat(`rare-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                        case "Epic": {
                                            for (var s = 0; s < 2; s++) {
                                                var i = L.particles.get();
                                                i && i.spawn.apply(i, Object.values(Z(s % 2 == 0 ? "left-shower" : "right-shower")).concat(`epic-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                        case "Legendary": {
                                            for (var l = 0; l < 3; l++) {
                                                var c = L.particles.get();
                                                c && c.spawn.apply(c, Object.values(Z("top")).concat(`legendary-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                        case "Chroma": {
                                            for (var u = 0; u < 3; u++) {
                                                var d = L.particles.get();
                                                d && d.spawn.apply(d, Object.values(Z(u % 2 == 0 ? "left-diamond" : "right-diamond")).concat(`chroma-${Object(I.m)(1, 8)}`))
                                            }
                                            break;
                                        }
                                    }
                                    this.nextParticle = 20;
                                    this.numExplosions > 0 && (this.numExplosions = Math.max(this.numExplosions - 1, 0));
                                }
                            }
                        }
                        const allBlooks = Object.entries(Object.values(webpack.c).find(x => Object.values(x.exports?.a || {})[0]?.set).exports.a).reduce((a, b) => (Object.values(webpack.c).find(x => x.exports.a?.Breakfast == 15).exports.a[b[1].realSet || b[1].set] && (a[b[0]] = b[1]), a), {});
                        let blook = prompt("What blook do you want to simulate opening? (Case Sensitive)");
                        if (Object.keys(allBlooks).includes(blook)) stateNode.setState({
                            loadingPack: false,
                            openPack: true,
                            unlockedBlook: blook,
                            tokens: stateNode.state.tokens,
                            newUnlock: true,
                            game: {
                                type: phaser.WEBGL,
                                parent: "phaser-market",
                                width: "100%",
                                height: "100%",
                                scale: { mode: phaser.Scale.NONE, autoCenter: phaser.Scale.CENTER_BOTH },
                                transparent: true,
                                physics: { default: "arcade" },
                                scene: new Particles(allBlooks[blook].rarity)
                            },
                            canOpen: true
                        });
                        else if (blook) alert("Invalid blook! Make sure you spelled and capitalized it properly, the blook also needs a buyable pack in the market.");
                    } else alert("This can only be ran on the market page!");
                }
            });
            })();
            simulateBlook = false
        }
        if (highlightAnswers) {
            (async () => { 
            let i = document.createElement('iframe');
            document.body.append(i);
            window.confirm = i.contentWindow.confirm.bind(window);
            i.remove();
            Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/highlightAnswers.js")?.answers?.[0]}`)).then(async x => {
                if (1678659460228 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
                    /* Update Checker end */
                    const { stateNode: { state, props } } = Object.values(document.querySelector('#app > div > div'))[1].children[0]._owner;
                    [...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer, i) => {
                        if ((state.question || props.client.question).correctAnswers.includes((state.question || props.client.question).answers[i])) answer.style.backgroundColor = "rgb(0, 207, 119)";
                        else answer.style.backgroundColor = "rgb(189, 15, 38)";
                    });
                }
            });
            })();
        };
        if (autoAnswer2) {
            if (Object.values(document.querySelector('#app > div > div'))[1].children[0]['_owner'].stateNode.state.readId == '') {
                function sleep (time) {
                    return new Promise((resolve) => setTimeout(resolve, time));
                }
            }
            sleep(Math.random() * (2.0 - 1.3) + 1.3)
            reactHandler().memoizedState.question.correctAnswers = reactHandler().memoizedState.question.answers
            document.getElementsByClassName('styles__answerTextContainer___3YgCT-camelCase')[0].click();
            document.getElementsByClassName('arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase')[0].click();
        }
        if (autoAnswer3) {
            reactHandler().memoizedState.question.correctAnswers = reactHandler().memoizedState.question.answers
            document.getElementsByClassName('styles__answerTextContainer___3YgCT-camelCase')[0].click();
            document.getElementsByClassName('arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase')[0].click();
        }
        if (ac) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            try {
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate1___3BXBA-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate1___3BXBA-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate1___3BXBA-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate2___1f6Pq-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate2___1f6Pq-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate2___1f6Pq-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate3___1guU2-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate3___1guU2-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate3___1guU2-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate4___1Zlaf-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate4___1Zlaf-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate4___1Zlaf-camelCase styles__plateHover___1RzQy-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate5___-9d8K-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate5___-9d8K-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate5___-9d8K-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate6___3yB90-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate6___3yB90-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate6___3yB90-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate7___37g8Y-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate7___37g8Y-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate7___37g8Y-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate8___3rviq-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate8___3rviq-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate8___3rviq-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate9___39OgN-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate9___39OgN-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__plate___1-Iik-camelCase styles__plate9___39OgN-camelCase styles__plateHover___1RzQy-camelCase styles__plateColor5___1FmqE-camelCase')[0].click();
                sleep(1000)
                document.getElementsByClassName('styles__container___3uQN5-camelCase')[0].click();
                sleep(1000)
            } catch { }
        }
        if (curPage == 'kingdom') {
            Array.from(document.getElementsByClassName('choiceESP')).forEach(x => x.remove())
            if (choiceESP) {
                try {
                    let elements = {
                        materials: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('tree'))),
                        people: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('users') && e.parentElement.className.includes('statContainer'))),
                        happiness: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('grin'))),
                        gold: Array.from(document.querySelectorAll('div')).find(x => Array.from(x.children).find(e => e.className.includes('coins')))
                    }
                    let data = reactHandler().stateNode.state.guest;
                    Object.entries(data.yes).forEach(x => {
                        if (x[0] == 'msg') return;
                        let element = document.createElement('div');
                        element.className = 'choiceESP';
                        element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                        element.innerText = String(x[1])
                        elements[x[0]].appendChild(element);
                    })
                    Object.entries(data.no).forEach(x => {
                        if (x[0] == 'msg') return;
                        let element = document.createElement('div');
                        element.className = 'choiceESP';
                        element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                        element.innerText = String(x[1])
                        elements[x[0]].appendChild(element);
                    })
                } catch (e) { }
            };
        }
        if (autoFrenzy) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            try {
                sleep(2000).then(() => {document.getElementsByClassName('styles__pageButton___3uI22-camelCase')[0].click()});
                sleep(2000).then(() => {document.getElementsByClassName('styles__pageButton___3uI22-camelCase')[0].click()});
                sleep(2000).then(() => {document.getElementsByClassName('arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase')[0].click()});
                sleep(2000).then(() => {document.getElementsByClassName('arts__modal___VpEAD-camelCase styles__fishModal___PqTdM-camelCase styles__fishModalButton___2-VaN-camelCase')[0].click()});
            } catch { }
        }
        if (curPage == 'crypto' && autoPassword) {
            let { stage, correctPassword } = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner.stateNode.state;
            if (stage == "hack") Array.from(document.querySelectorAll('div')).filter(x => x.innerHTML == correctPassword)[0].click();
        };
        if (curPage == 'crypto' && apc) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            sleep(2000).then(() => {document.getElementsByClassName('styles__nextText___2QnHA-camelCase')[0].click()});
            sleep(2000).then(() => {document.getElementsByClassName('styles__choice___1aMOz-camelCase styles__choice2___3mKbD-camelCase')[0].click()});
            sleep(2000).then(() => {document.getElementsByClassName('styles__feedbackContainer___7PzgR-camelCase')[0].click()});
        }
        if (curPage == 'gold' && chestESP) {
            try {
                if (reactHandler().stateNode.state.stage == 'prize') {
                    let { choices } = reactHandler().stateNode.state;
                    let div = document.querySelector("div[class*='regularBody']").children[1];
                    if (div) {
                        if (!document.querySelectorAll(".chest-esp").length) choices.forEach((box, i) => {
                            textElement = document.createElement('p');
                            textElement.className = "chest-esp";
                            textElement.innerText = box.text;
                            textElement.style = `text-align: center;
                    font-size: 30px;
                    color: white;
                    font-family:Titan One;
                    sans-serif;
                    border-color: black;
                    margin-top: 200px;`
                            try { div.children[i].appendChild(textElement); } catch (e) { console.log(e) }
                        });
                        else choices.forEach((box, i) => {
                            if (div.children.length == 3 && div.children[i].children[1].innerText != box.text) div.children[i].children[1].innerText = box.text;
                        })
                    }
                }
            } catch (e) { console.log(e) }
        };
        if (curPage == 'gold' && agq) {
            function sleep (time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }
            sleep(2000).then(() => {document.getElementsByClassName('styles__nextText___2QnHA-camelCase')[0].click()});
            sleep(2000).then(() => {document.getElementsByClassName('styles__chest___2oDth-camelCase')[0].click()});
            sleep(2000).then(() => {document.getElementsByClassName('styles__feedbackContainer___7PzgR-camelCase')[0].click()});
            sleep(2000).then(() => {document.getElementsByClassName('styles__playerContainer___3zoyU-camelCase')[0].click()});
        };
    });
    

    let curPage = getSite();
    if (curPage && cheats[curPage]) Object.keys(cheats[curPage]).forEach(cheat => {
        let button = createButton(cheat);
        button.onclick = cheats[curPage][cheat];
        cheatDiv.appendChild(button);
        cheatDiv.appendChild(document.createElement('br'));
    })

    function createButton(cheat) {
        let button = document.createElement('button');
        button.classList.add('cheat');
        button.innerText = cheat;
        return button
    }
    function getSite(capitalize) {
        switch (window.location.pathname.split('/')[2]) {
            case 'rush': return capitalize ? 'Blook Rush' : 'rush';
            case 'gold': return capitalize ? 'Gold Quest' : 'gold';
            case 'fishing': return capitalize ? 'Fishing Frenzy' : 'fishing';
            case 'hack': return capitalize ? 'Crypto Hack' : 'crypto';
            case 'battle-royale': return capitalize ? 'Battle Royale' : 'royale';
            case 'factory': return capitalize ? 'Factory' : 'factory';
            case 'racing': return capitalize ? 'Racing' : 'racing';
            case 'classic': return capitalize ? 'Classic' : 'classic';
            case 'brawl': return 'brawl';
            default: switch (window.location.pathname.split('/')[1]) {
                case 'defense': return capitalize ? 'Tower Defense' : 'defense';
                case 'cafe': return capitalize ? 'Café' : 'cafe';
                case 'tower': return capitalize ? 'Tower of Doom' : 'doom';
                case 'kingdom': return capitalize ? 'Crazy Kingdom' : 'kingdom';
                default: return false;
            }
        };
    };
    function toggleHidden(e) {
        e.code == 'KeyE' && (GUI.hidden = !GUI.hidden)
    };
    addEventListener('keypress', toggleHidden);
})();
