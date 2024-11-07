"use strict";
var Solarsystem;
(function (Solarsystem) {
    window.addEventListener("load", handleLoad);
    let timespeed = 0.5;
    const astrobodies1 = [];
    const astrobodies2 = [];
    const astrobodies3 = [];
    function handleLoad(_event) {
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Solarsystem.crc2 = canvas.getContext("2d");
        Solarsystem.crc2.fillStyle = "black";
        Solarsystem.crc2.strokeStyle = "white";
        Solarsystem.crc2.fillRect(0, 0, Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height);
        canvas.addEventListener("click", handleClick);
        const slider = document.getElementsByTagName("input")[0];
        slider.onchange = function () {
            timespeed = Number(slider.value);
        };
        createPlanets();
        setInterval(update, 20);
    }
    function createPlanets() {
        //create moons
        const earthMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 17, "earth moon");
        const marsMoons = [];
        for (let i = 0; i < 2; i++) {
            const marsMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, 11, "mars moon" + (i + 1));
            marsMoon.positionrad = (2 * Math.PI) / 2 * i;
            marsMoons.push(marsMoon);
            astrobodies3.push(marsMoon);
        }
        const jupiterMoons = [];
        for (let i = 0; i < 95; i++) {
            const jupiterMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, Math.floor(Math.random() * 10 + 35), "jupiter moon" + (i + 1));
            jupiterMoon.positionrad = (2 * Math.PI) / 95 * i;
            jupiterMoons.push(jupiterMoon);
            astrobodies3.push(jupiterMoon);
        }
        const saturnMoons = [];
        for (let i = 0; i < 146; i++) {
            const saturnMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, Math.floor(Math.random() * 10 + 30), "saturn moon" + (i + 1));
            saturnMoon.positionrad = (2 * Math.PI) / 146 * i;
            saturnMoons.push(saturnMoon);
            astrobodies3.push(saturnMoon);
        }
        const uranusMoons = [];
        for (let i = 0; i < 28; i++) {
            const uranusMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, Math.floor(Math.random() * 10 + 20), "saturn moon" + (i + 1));
            uranusMoon.positionrad = (2 * Math.PI) / 28 * i;
            uranusMoons.push(uranusMoon);
            astrobodies3.push(uranusMoon);
        }
        const neptuneMoons = [];
        for (let i = 0; i < 16; i++) {
            const neptuneMoon = new Solarsystem.Astrobody([], 1, "lightgray", 12 * 6 * Math.PI / 180, Math.floor(Math.random() * 10 + 20), "saturn moon" + (i + 1));
            neptuneMoon.positionrad = (2 * Math.PI) / 16 * i;
            neptuneMoons.push(neptuneMoon);
            astrobodies3.push(neptuneMoon);
        }
        //create planets
        const mercury = new Solarsystem.Astrobody([], 4.9, "#b1adad", (6 * Math.PI / 180) / 0.3, 0.3 * 100, "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). Without an atmosphere to retain that heat at night, temperatures can dip as low as -290°F (-180°C). Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days.");
        const venus = new Solarsystem.Astrobody([], 12.1, "#e3bb76", (6 * Math.PI / 180) / 0.6, 0.65 * 100, "Venus is the second planet from the Sun, and Earth's closest planetary neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets. Venus is similar in structure and size to Earth, and is sometimes called Earth's evil twin. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Below the dense, persistent clouds, the surface has volcanoes and deformed mountains.");
        const earth = new Solarsystem.Astrobody([earthMoon], 12.76, "#6b93d6", 6 * Math.PI / 180, 1 * 100, "While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means \"the ground.\" There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.");
        const mars = new Solarsystem.Astrobody(marsMoons, 6.8, "#e77d11", (6 * Math.PI / 180) / 2, 1.52 * 100, "Mars - the fourth planet from the Sun – is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.");
        const jupiter = new Solarsystem.Astrobody(jupiterMoons, 30, "#d8ca9d", (6 * Math.PI / 180) / 12, 2.2 * 100, "Jupiter is a world of extremes. It's the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.6 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis. Jupiter's signature stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. The dark orange stripes are called belts, while the lighter bands are called zones, and they flow east and west in opposite directions. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.");
        const saturn = new Solarsystem.Astrobody(saturnMoons, 25, "#fceead", (6 * Math.PI / 180) / 30, 3.1 * 100, "Saturn is the sixth planet from the Sun, and the second-largest planet in our solar system. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.");
        const uranus = new Solarsystem.Astrobody(uranusMoons, 15, "#afdbf5", (6 * Math.PI / 180) / 84, 3.9 * 100, "Uranus is the seventh planet from the Sun, and it has the third largest diameter of planets in our solar system. Uranus appears to spin sideways. Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.");
        const neptune = new Solarsystem.Astrobody(neptuneMoons, 14.7, "#3d5ef9", (6 * Math.PI / 180) / 165, 4.6 * 100, "Neptune is the eighth and most distant planet in our solar system. Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth. Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.");
        //create sun
        const sun = new Solarsystem.Astrobody([mercury, venus, earth, mars, jupiter, saturn, uranus, neptune], 20, "yellow", 0, 0, "sun lol", new Solarsystem.Vector(500, 400));
        astrobodies1.push(sun);
        astrobodies2.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
        astrobodies3.push(earthMoon);
    }
    function update() {
        Solarsystem.crc2.fillStyle = "black";
        Solarsystem.crc2.fillRect(0, 0, Solarsystem.crc2.canvas.width, Solarsystem.crc2.canvas.height);
        for (const element of astrobodies1) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
        for (const element of astrobodies2) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
        for (const element of astrobodies3) {
            element.moveChildren(timespeed, 1 / 50);
            element.draw();
        }
    }
    function handleClick(_event) {
        const div = document.getElementsByTagName("div")[0];
        const click = new Solarsystem.Vector(_event.clientX - Solarsystem.crc2.canvas.offsetLeft, _event.clientY - Solarsystem.crc2.canvas.offsetTop);
        for (const element of astrobodies1) {
            element.checkClick(click, div);
        }
        for (const element of astrobodies2) {
            element.checkClick(click, div);
        }
        for (const element of astrobodies3) {
            element.checkClick(click, div);
        }
    }
})(Solarsystem || (Solarsystem = {}));
