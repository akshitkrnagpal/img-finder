#!/usr/bin/env node

import fastifyCors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import { create as createWalk } from '@root/walk';

import fastify from 'fastify';
import path from 'path';
import isImage from 'is-image';
import arg from 'arg';
import open from 'open';

const args = arg({
  // Types
  '--port': Number,
  '--debug': Boolean,
  // Alias
  '-p': '--port',
});

const server = fastify({ logger: args['--debug'] });

server.register(fastifyCors);
server.register(fastifyStatic, {
  root: path.resolve(__dirname, '../web'),
});
server.register(fastifyStatic, {
  root: path.resolve('.'),
  prefix: '/images/',
  decorateReply: false,
  allowedPath: isImage,
});

const walk = createWalk({
  withFileStats: true,
});

server.get('/files', async (req, res) => {
  const files = [] as any[];
  const walkFunc = async (err, pathname, dirent) => {
    if (err) {
      throw err;
    }
    if (dirent.isDirectory() && dirent.name.startsWith('.')) {
      return false;
    }

    if (isImage(pathname)) {
      files.push({
        src: `/images/${pathname}`,
        directory: path.dirname(pathname),
        filename: dirent.name,
      });
    }
  };

  await walk('./', walkFunc);
  res.send(files);
});

server.listen({ port: args['--port'] || 5000 }, async (error, address) => {
  console.log(`Server running at ${address}`);
  await open(address);
});
