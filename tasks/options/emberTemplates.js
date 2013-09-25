module.exports = {
  options: {
    templateBasePath: /app\//,
    templateFileExtensions: /\.(hbs|hjs|handlebars)/,
    generateRegistrationJs: function(processedTemplates) {
      return processedTemplates.map(function(processedTemplate){
        return "define('" + processedTemplate.name + "', [], function(){ return " + processedTemplate.js + "; });";
      }).join("\n");
    }
  },
  debug: {
    options: {
      precompile: false
    },
    src: "app/*/templates/**/*.{hbs,hjs,handlebars}",
    dest: "tmp/public/assets/templates.js"
  },
  dist: {
    src: "<%= emberTemplates.debug.src %>",
    dest: "<%= emberTemplates.debug.dest %>"
  }
};
