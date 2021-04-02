source "https://rubygems.org"

gem 'jekyll', '~> 3.9'
gem 'kramdown-parser-gfm'

group :jekyll_plugins do
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'jekyll-assets', github: 'thinktutor/jekyll-assets'
end

# bootstrap files
gem 'autoprefixer-rails'
gem 'bootstrap', '~> 5.0.0.beta2'

gem "mini_magick"

# optimize images
gem 'image_optim'
gem 'image_optim_bin'
gem "image_optim_pack"

# new version of sprockets has issues
gem "sprockets"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
