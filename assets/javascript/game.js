        
        var words=["BEIJING", "ISLAMABAD", "BERLIN", "PARIS", "CAIRO", "BRASILIA"];
        var letters=[];
        var currentWord = words[Math.floor(Math.random() * words.length)];
        var guesses = 0;
        
        
        document.onkeyup = function(event) {
            startGame();
            wordMatch();
        } 
        
        //function to run game
        function startGame() {
            var letter = event.key.toUpperCase();
            var div = document.createElement("div");
            var inner = div.innerHTML=letter;
            document.getElementById("guess").appendChild(div);
            letters.push(letter);
            gameOver();
            console.log("there are " + guesses + " letters in the array");
            console.log("letters pressed array: " + letters);
            console.log("letter pressed: " + letter);
        }
        
        //function to run different functions for each different country
        function wordMatch() {
            console.log("random capital chosen: " + currentWord);

            if (currentWord === "BEIJING") {
                document.getElementById("china").style.display = "block";
                var id = document.getElementById("1");
                var html = id.innerHTML="_";
                var id = document.getElementById("2");
                var html = id.innerHTML="_";
                var id = document.getElementById("3");
                var html = id.innerHTML="_";
                var id = document.getElementById("4");
                var html = id.innerHTML="_";
                var id = document.getElementById("5");
                var html = id.innerHTML="_";
                var id = document.getElementById("6");
                var html = id.innerHTML="_";
                var id = document.getElementById("7");
                var html = id.innerHTML="_";
                compareBei();
                gameWinBei();
            } else if (currentWord === "BRASILIA") {
                document.getElementById("brazil").style.display = "block";
                var id = document.getElementById("1");
                var html = id.innerHTML="_";
                var id = document.getElementById("2");
                var html = id.innerHTML="_";
                var id = document.getElementById("3");
                var html = id.innerHTML="_";
                var id = document.getElementById("4");
                var html = id.innerHTML="_";
                var id = document.getElementById("5");
                var html = id.innerHTML="_";
                var id = document.getElementById("6");
                var html = id.innerHTML="_";
                var id = document.getElementById("7");
                var html = id.innerHTML="_";
                var id = document.getElementById("8");
                var html = id.innerHTML="_";
                compareBra();
                gameWinBra();
            } else if (currentWord === "CAIRO") {
                document.getElementById("egypt").style.display = "block";
                var id = document.getElementById("1");
                var html = id.innerHTML="_";
                var id = document.getElementById("2");
                var html = id.innerHTML="_";
                var id = document.getElementById("3");
                var html = id.innerHTML="_";
                var id = document.getElementById("4");
                var html = id.innerHTML="_";
                var id = document.getElementById("5");
                var html = id.innerHTML="_";
                compareCai();
                gameWinCai();
            } else if (currentWord === "PARIS") {
                document.getElementById("france").style.display = "block";
                var id = document.getElementById("1");
                var html = id.innerHTML="_";
                var id = document.getElementById("2");
                var html = id.innerHTML="_";
                var id = document.getElementById("3");
                var html = id.innerHTML="_";
                var id = document.getElementById("4");
                var html = id.innerHTML="_";
                var id = document.getElementById("5");
                var html = id.innerHTML="_";
                comparePar();
                gameWinPar();
            } else if (currentWord === "BERLIN") {
                document.getElementById("germany").style.display = "block";
                var id = document.getElementById("1");
                var html = id.innerHTML="_";
                var id = document.getElementById("2");
                var html = id.innerHTML="_";
                var id = document.getElementById("3");
                var html = id.innerHTML="_";
                var id = document.getElementById("4");
                var html = id.innerHTML="_";
                var id = document.getElementById("5");
                var html = id.innerHTML="_";
                var id = document.getElementById("6");
                var html = id.innerHTML="_";
                compareBer();
                gameWinBer();
            } else if (currentWord === "ISLAMABAD") {
                document.getElementById("pakistan").style.display = "block";
                var id = document.getElementById("1");
                var html = id.innerHTML="_";
                var id = document.getElementById("2");
                var html = id.innerHTML="_";
                var id = document.getElementById("3");
                var html = id.innerHTML="_";
                var id = document.getElementById("4");
                var html = id.innerHTML="_";
                var id = document.getElementById("5");
                var html = id.innerHTML="_";
                var id = document.getElementById("6");
                var html = id.innerHTML="_";
                var id = document.getElementById("7");
                var html = id.innerHTML="_";
                var id = document.getElementById("8");
                var html = id.innerHTML="_";
                var id = document.getElementById("9");
                var html = id.innerHTML="_";
                compareIsl();
                gameWinIsl();
            } 

        } 

        function gameOver() {
            for (guesses = 0; guesses < letters.length; guesses++){
                if (guesses === 10) {
                    alert("You lose, try again.");
                    location.reload();
                }
            }
        }

        //brasilia
        function gameWinBra() {
            if (letters.includes("B") && letters.includes("R") && letters.includes("A") && letters.includes("S") && letters.includes("I") && letters.includes("L")) {
                alert("You win, try another capital!");
                location.reload();
            }
        }

        function compareBra() {
                Brasil();
                bRasil();
                brAsil();
                braSil();
                brasIl();
                brasiL();
        }

        function Brasil() {
            if (letters.includes("B")) {
                    var id = document.getElementById("1");
                    var html = id.innerHTML="B";
                }
        }

        function bRasil() {
            if (letters.includes("R")) {
                    var id = document.getElementById("2");
                    var html = id.innerHTML="R";
                }
        }

        function brAsil() {
            if (letters.includes("A")) {
                    var id = document.getElementById("3");
                    var html = id.innerHTML="A";
                    var id = document.getElementById("8");
                    var html = id.innerHTML="A";
                }
        }

        function braSil() {
            if (letters.includes("S")) {
                    var id = document.getElementById("4");
                    var html = id.innerHTML="S";
                }
        }    

        function brasIl() {
            if (letters.includes("I")) {
                    var id = document.getElementById("5");
                    var html = id.innerHTML="I";
                    var id = document.getElementById("7");
                    var html = id.innerHTML="I";
                }
        }  

        function brasiL() {
            if (letters.includes("L")) {
                    var id = document.getElementById("6");
                    var html = id.innerHTML="L";
                }
        }  

        //cairo
        function gameWinCai() {
            if (letters.includes("C") && letters.includes("A") && letters.includes("I") && letters.includes("R") && letters.includes("O")) {
                alert("You win, try another capital!");
                location.reload();
            }
        }

        function compareCai() {
                Cairo();
                cAiro();
                caIro();
                caiRo();
                cairO();
        }

        function Cairo() {
            if (letters.includes("C")) {
                    var id = document.getElementById("1");
                    var html = id.innerHTML="C";
                }
        }

        function cAiro() {
            if (letters.includes("A")) {
                    var id = document.getElementById("2");
                    var html = id.innerHTML="A";
                }
        }

        function caIro() {
            if (letters.includes("I")) {
                    var id = document.getElementById("3");
                    var html = id.innerHTML="I";
                }
        }

        function caiRo() {
            if (letters.includes("R")) {
                    var id = document.getElementById("4");
                    var html = id.innerHTML="R";
                }
        }

        function cairO() {
            if (letters.includes("O")) {
                    var id = document.getElementById("5");
                    var html = id.innerHTML="O";
                }
        }


        //paris
        function gameWinPar() {
            if (letters.includes("P") && letters.includes("A") && letters.includes("R") && letters.includes("I") && letters.includes("S")) {
                alert("You win, try another capital!");
                location.reload();
            }
        }
        
        function comparePar() {
                Paris();
                pAris();
                paRis();
                parIs();
                pariS();
        }
        
        function Paris() {
            if (letters.includes("P")) {
                    var id = document.getElementById("1");
                    var html = id.innerHTML="P";
                }
        }

        function pAris() {
            if (letters.includes("A")) {
                    var id = document.getElementById("2");
                    var html = id.innerHTML="A";
                }
        }

        function paRis() {
            if (letters.includes("R")) {
                    var id = document.getElementById("3");
                    var html = id.innerHTML="R";
                }
        }

        function parIs() {
            if (letters.includes("I")) {
                    var id = document.getElementById("4");
                    var html = id.innerHTML="I";
                }
        }

        function pariS() {
            if (letters.includes("S")) {
                    var id = document.getElementById("5");
                    var html = id.innerHTML="S";
                }
        }

        //berlin
        function gameWinBer() {
            if (letters.includes("B") && letters.includes("E") && letters.includes("R") && letters.includes("L") && letters.includes("I") && letters.includes("N")) {
                alert("You win, try another capital!");
                location.reload();
            }
        }

        function compareBer() {
                Berlin();
                bErlin();
                beRlin();
                berLin();
                berlIn();
                berliN();
        }

        function Berlin() {
            if (letters.includes("B")) {
                    var id = document.getElementById("1");
                    var html = id.innerHTML="B";
                }
        }

        function bErlin() {
            if (letters.includes("E")) {
                    var id = document.getElementById("2");
                    var html = id.innerHTML="E";
                }
        }

        function beRlin() {
            if (letters.includes("R")) {
                    var id = document.getElementById("3");
                    var html = id.innerHTML="R";
                }
        }

        function berLin() {
            if (letters.includes("L")) {
                    var id = document.getElementById("4");
                    var html = id.innerHTML="L";
                }
        }

        function berlIn() {
            if (letters.includes("I")) {
                    var id = document.getElementById("5");
                    var html = id.innerHTML="I";
                }
        }

        function berliN() {
            if (letters.includes("N")) {
                    var id = document.getElementById("6");
                    var html = id.innerHTML="N";
                }
        }

        //beijing
        function gameWinBei() {
            if (letters.includes("B") && letters.includes("E") && letters.includes("I") && letters.includes("J") && letters.includes("N") && letters.includes("G")) {
                alert("You win, try another capital!");
                location.reload();
            }
        }
        

        function compareBei() {
                bB();
                bE();
                bI();
                bJ();
                bN();
                bG();
        }
        
        function bB() {
            if (letters.includes("B")) {
                    var id = document.getElementById("1");
                    var html = id.innerHTML="B";
                }
        }

        function bE() {
            if (letters.includes("E")) {
                    var id = document.getElementById("2");
                    var html = id.innerHTML="E";
                }
        }

        function bI() {
            if (letters.includes("I")) {
                    var id = document.getElementById("3");
                    var html = id.innerHTML="I";
                    var id1 = document.getElementById("5");
                    var html1 = id1.innerHTML="I";
                }
        }

        function bJ() {
            if (letters.includes("J")) {
                    var id = document.getElementById("4");
                    var html = id.innerHTML="J";
                }
        }

        function bN() {
            if (letters.includes("N")) {
                    var id = document.getElementById("6");
                    var html = id.innerHTML="N";
                }
        }

        function bG() {
            if (letters.includes("G")) {
                    var id = document.getElementById("7");
                    var html = id.innerHTML="G";
                }
        }

        //islamabad
        function gameWinIsl() {
            if (letters.includes("I") && letters.includes("S") && letters.includes("L") && letters.includes("A") && letters.includes("M") && letters.includes("B") && letters.includes("D")) {
                alert("You win, try another capital");
                location.reload();
            }
        }

        function compareIsl() {
                iI();
                iS();
                iL();
                iA();
                iM();
                iB();
                iD();
        }
        
        function iI() {
            if (letters.includes("I")) {
                    var id = document.getElementById("1");
                    var html = id.innerHTML="I";
                }
        }

        function iS() {
            if (letters.includes("S")) {
                    var id = document.getElementById("2");
                    var html = id.innerHTML="S";
                }
        }

        function iL() {
            if (letters.includes("L")) {
                    var id = document.getElementById("3");
                    var html = id.innerHTML="L";
                }
        }

        function iA() {
            if (letters.includes("A")) {
                    var id = document.getElementById("4");
                    var html = id.innerHTML="A";
                    var id = document.getElementById("6");
                    var html = id.innerHTML="A";
                    var id = document.getElementById("8");
                    var html = id.innerHTML="A";
                }
        }

        function iM() {
            if (letters.includes("M")) {
                    var id = document.getElementById("5");
                    var html = id.innerHTML="M";
                }
        }

        function iB() {
            if (letters.includes("B")) {
                    var id = document.getElementById("7");
                    var html = id.innerHTML="B";
                }
        }

        function iD() {
            if (letters.includes("D")) {
                    var id = document.getElementById("9");
                    var html = id.innerHTML="D";
                }
        }