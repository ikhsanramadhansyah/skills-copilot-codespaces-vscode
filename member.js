function skillsMember() {
    const member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        printSkills: function() {
            this.skills.forEach((skill) => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };

    member.printSkills();
}