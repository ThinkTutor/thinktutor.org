source 'https://rubygems.org'

ruby '~> 2.6'

gem 'jekyll', '~> 4.3.1'
gem 'kramdown-parser-gfm'

group :jekyll_plugins do
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
  gem 'jekyll-assets', github: 'envygeeks/jekyll-assets'
end

# bootstrap files
gem 'autoprefixer-rails'
gem 'bootstrap', '~> 5.2.3'

gem 'mini_magick'

# optimize images
gem 'image_optim'
gem 'image_optim_bin'
gem 'image_optim_pack'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem 'tzinfo', '~> 1.2'
  gem 'tzinfo-data'
end
