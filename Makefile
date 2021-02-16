init:
	pnpm install --shamefully-hoist

dev:
	yarn dev

package:
	yarn package

release: package
	yarn release