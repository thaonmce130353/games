"use strict";
(self.webpackChunkruffle_selfhosted =
  self.webpackChunkruffle_selfhosted || []).push([
  [339],
  {
    972: (e, n, t) => {
      function _(e, n) {
        const t = e.length,
          _ = e.getChannelData(0),
          r = e.getChannelData(1);
        let b = 0,
          f = 0;
        for (; f < t; ) (_[f] = n[b]), (r[f] = n[b + 1]), f++, (b += 2);
      }
      function r(e, n) {
        return e[n];
      }
      t.d(n, { $s: () => r, tM: () => _ });
    },
    339: (e, n, t) => {
      t.r(n), t.d(n, { Ruffle: () => L, default: () => q, initSync: () => U });
      var _ = t(972);
      e = t.hmd(e);
      const r =
        "undefined" != typeof AudioContext
          ? AudioContext
          : "undefined" != typeof webkitAudioContext
          ? webkitAudioContext
          : void 0;
      let b;
      const f = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
      f.decode();
      let c = null;
      function a() {
        return (
          (null !== c && 0 !== c.byteLength) ||
            (c = new Uint8Array(b.memory.buffer)),
          c
        );
      }
      function u(e, n) {
        return f.decode(a().subarray(e, e + n));
      }
      function o(e) {
        return null == e;
      }
      let i = null;
      function g() {
        return (
          (null !== i && 0 !== i.byteLength) ||
            (i = new Float64Array(b.memory.buffer)),
          i
        );
      }
      let w = null;
      function d() {
        return (
          (null !== w && 0 !== w.byteLength) ||
            (w = new Int32Array(b.memory.buffer)),
          w
        );
      }
      let l = 0;
      const s = new TextEncoder("utf-8"),
        m =
          "function" == typeof s.encodeInto
            ? function (e, n) {
                return s.encodeInto(e, n);
              }
            : function (e, n) {
                const t = s.encode(e);
                return n.set(t), { read: e.length, written: t.length };
              };
      function p(e, n, t) {
        if (void 0 === t) {
          const t = s.encode(e),
            _ = n(t.length);
          return (
            a()
              .subarray(_, _ + t.length)
              .set(t),
            (l = t.length),
            _
          );
        }
        let _ = e.length,
          r = n(_);
        const b = a();
        let f = 0;
        for (; f < _; f++) {
          const n = e.charCodeAt(f);
          if (n > 127) break;
          b[r + f] = n;
        }
        if (f !== _) {
          0 !== f && (e = e.slice(f)), (r = t(r, _, (_ = f + 3 * e.length)));
          const n = a().subarray(r + f, r + _);
          f += m(e, n).written;
        }
        return (l = f), r;
      }
      let y = null;
      function h(e) {
        const n = typeof e;
        if ("number" == n || "boolean" == n || null == e) return `${e}`;
        if ("string" == n) return `"${e}"`;
        if ("symbol" == n) {
          const n = e.description;
          return null == n ? "Symbol" : `Symbol(${n})`;
        }
        if ("function" == n) {
          const n = e.name;
          return "string" == typeof n && n.length > 0
            ? `Function(${n})`
            : "Function";
        }
        if (Array.isArray(e)) {
          const n = e.length;
          let t = "[";
          n > 0 && (t += h(e[0]));
          for (let _ = 1; _ < n; _++) t += ", " + h(e[_]);
          return (t += "]"), t;
        }
        const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let _;
        if (!(t.length > 1)) return toString.call(e);
        if (((_ = t[1]), "Object" == _))
          try {
            return "Object(" + JSON.stringify(e) + ")";
          } catch (e) {
            return "Object";
          }
        return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : _;
      }
      function x(e, n, t, _) {
        const r = { a: e, b: n, cnt: 1, dtor: t },
          f = (...e) => {
            r.cnt++;
            const n = r.a;
            r.a = 0;
            try {
              return _(n, r.b, ...e);
            } finally {
              0 == --r.cnt
                ? b.__wbindgen_export_3.get(r.dtor)(n, r.b)
                : (r.a = n);
            }
          };
        return (f.original = r), f;
      }
      function S(e, n, t) {
        b.closure284_externref_shim(e, n, t);
      }
      function v(e, n, t) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he969d8a754c2b093(
          e,
          n,
          t
        );
      }
      function A(e, n) {
        b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h325eeff663ea61bc(
          e,
          n
        );
      }
      function I(e, n, t) {
        b.closure5211_externref_shim(e, n, t);
      }
      function D(e) {
        const n = b.__externref_table_alloc();
        return b.__wbindgen_export_2.set(n, e), n;
      }
      function P(e, n) {
        try {
          return e.apply(this, n);
        } catch (e) {
          const n = D(e);
          b.__wbindgen_exn_store(n);
        }
      }
      function T(e) {
        const n = b.__wbindgen_export_2.get(e);
        return b.__externref_table_dealloc(e), n;
      }
      let E = null;
      function F() {
        return (
          (null !== E && 0 !== E.byteLength) ||
            (E = new Uint32Array(b.memory.buffer)),
          E
        );
      }
      let R = null;
      function B(e, n) {
        return ((null !== R && 0 !== R.byteLength) ||
          (R = new Float32Array(b.memory.buffer)),
        R).subarray(e / 4, e / 4 + n);
      }
      function M(e, n) {
        return a().subarray(e / 1, e / 1 + n);
      }
      function k(e, n) {
        return d().subarray(e / 4, e / 4 + n);
      }
      let C = null;
      class L {
        static __wrap(e) {
          const n = Object.create(L.prototype);
          return (n.ptr = e), n;
        }
        __destroy_into_raw() {
          const e = this.ptr;
          return (this.ptr = 0), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          b.__wbg_ruffle_free(e);
        }
        constructor(e, n, t) {
          return b.ruffle_new(e, n, t);
        }
        stream_from(e, n) {
          try {
            const _ = b.__wbindgen_add_to_stack_pointer(-16),
              r = p(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = l;
            b.ruffle_stream_from(_, this.ptr, r, f, n);
            var t = d()[_ / 4 + 0];
            if (d()[_ / 4 + 1]) throw T(t);
          } finally {
            b.__wbindgen_add_to_stack_pointer(16);
          }
        }
        load_data(e, n, t) {
          try {
            const r = b.__wbindgen_add_to_stack_pointer(-16),
              f = p(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              c = l;
            b.ruffle_load_data(r, this.ptr, e, n, f, c);
            var _ = d()[r / 4 + 0];
            if (d()[r / 4 + 1]) throw T(_);
          } finally {
            b.__wbindgen_add_to_stack_pointer(16);
          }
        }
        play() {
          b.ruffle_play(this.ptr);
        }
        pause() {
          b.ruffle_pause(this.ptr);
        }
        is_playing() {
          return 0 !== b.ruffle_is_playing(this.ptr);
        }
        volume() {
          return b.ruffle_volume(this.ptr);
        }
        set_volume(e) {
          b.ruffle_set_volume(this.ptr, e);
        }
        renderer_debug_info() {
          return b.ruffle_renderer_debug_info(this.ptr);
        }
        prepare_context_menu() {
          return b.ruffle_prepare_context_menu(this.ptr);
        }
        run_context_menu_callback(e) {
          b.ruffle_run_context_menu_callback(this.ptr, e);
        }
        set_fullscreen(e) {
          b.ruffle_set_fullscreen(this.ptr, e);
        }
        clear_custom_menu_items() {
          b.ruffle_clear_custom_menu_items(this.ptr);
        }
        destroy() {
          b.ruffle_destroy(this.ptr);
        }
        call_exposed_callback(e, n) {
          const t = p(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            _ = l,
            r = (function (e, n) {
              const t = n(4 * e.length),
                _ = F();
              for (let n = 0; n < e.length; n++) _[t / 4 + n] = D(e[n]);
              return (l = e.length), t;
            })(n, b.__wbindgen_malloc),
            f = l;
          return b.ruffle_call_exposed_callback(this.ptr, t, _, r, f);
        }
        set_trace_observer(e) {
          b.ruffle_set_trace_observer(this.ptr, e);
        }
        audio_context() {
          return b.ruffle_audio_context(this.ptr);
        }
        static is_wasm_simd_used() {
          return 0 !== b.ruffle_is_wasm_simd_used();
        }
      }
      function O() {
        const n = { wbg: {} };
        return (
          (n.wbg.__wbindgen_cb_drop = function (e) {
            const n = e.original;
            return 1 == n.cnt-- && ((n.a = 0), !0);
          }),
          (n.wbg.__wbg_setMetadata_128bd20648a12d07 = function (e, n) {
            e.setMetadata(n);
          }),
          (n.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof e;
          }),
          (n.wbg.__wbindgen_string_new = function (e, n) {
            return u(e, n);
          }),
          (n.wbg.__wbg_getProperty_af1b259e02b39917 = function () {
            return P(function (e, n) {
              return (0, _.$s)(e, n);
            }, arguments);
          }),
          (n.wbg.__wbg_onCallbackAvailable_d54d3847055a0720 = function (
            e,
            n,
            t
          ) {
            e.onCallbackAvailable(u(n, t));
          }),
          (n.wbg.__wbg_onFSCommand_68fd9326a1eb7ff5 = function () {
            return P(function (e, n, t, _, r) {
              return e.onFSCommand(u(n, t), u(_, r));
            }, arguments);
          }),
          (n.wbg.__wbindgen_number_get = function (e, n) {
            const t = "number" == typeof n ? n : void 0;
            (g()[e / 8 + 1] = o(t) ? 0 : t), (d()[e / 4 + 0] = !o(t));
          }),
          (n.wbg.__wbindgen_string_get = function (e, n) {
            const t = "string" == typeof n ? n : void 0;
            var _ = o(t) ? 0 : p(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              r = l;
            (d()[e / 4 + 1] = r), (d()[e / 4 + 0] = _);
          }),
          (n.wbg.__wbindgen_boolean_get = function (e) {
            return "boolean" == typeof e ? (e ? 1 : 0) : 2;
          }),
          (n.wbg.__wbindgen_is_null = function (e) {
            return null === e;
          }),
          (n.wbg.__wbindgen_number_new = function (e) {
            return e;
          }),
          (n.wbg.__wbg_panic_52092d3d09d11787 = function (e, n) {
            e.panic(n);
          }),
          (n.wbg.__wbg_displayUnsupportedMessage_34ccd53f2155863e = function (
            e
          ) {
            e.displayUnsupportedMessage();
          }),
          (n.wbg.__wbg_displayRootMovieDownloadFailedMessage_ed4ad3ae9522c8a3 =
            function (e) {
              e.displayRootMovieDownloadFailedMessage();
            }),
          (n.wbg.__wbg_displayMessage_6b8a0011f836541f = function (e, n, t) {
            e.displayMessage(u(n, t));
          }),
          (n.wbg.__wbg_setFullscreen_85ac797b8823b727 = function () {
            return P(function (e, n) {
              e.setFullscreen(0 !== n);
            }, arguments);
          }),
          (n.wbg.__wbg_openVirtualKeyboard_e0659b8d0c7b81ed = function (e) {
            e.openVirtualKeyboard();
          }),
          (n.wbg.__wbindgen_error_new = function (e, n) {
            return new Error(u(e, n));
          }),
          (n.wbg.__wbg_ruffle_new = function (e) {
            return L.__wrap(e);
          }),
          (n.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === e;
          }),
          (n.wbg.__wbindgen_in = function (e, n) {
            return e in n;
          }),
          (n.wbg.__wbindgen_is_bigint = function (e) {
            return "bigint" == typeof e;
          }),
          (n.wbg.__wbindgen_bigint_from_u64 = function (e) {
            return BigInt.asUintN(64, e);
          }),
          (n.wbg.__wbindgen_jsval_eq = function (e, n) {
            return e === n;
          }),
          (n.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof e;
          }),
          (n.wbg.__wbindgen_is_object = function (e) {
            return "object" == typeof e && null !== e;
          }),
          (n.wbg.__wbg_copyToAudioBufferInterleaved_efb71b16faf5adb2 =
            function (e, n, t) {
              (0, _.tM)(e, B(n, t));
            }),
          (n.wbg.__wbg_new_abda76e883ba8a5f = function () {
            return new Error();
          }),
          (n.wbg.__wbg_stack_658279fe44541cf6 = function (e, n) {
            const t = p(n.stack, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = l;
            (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
          }),
          (n.wbg.__wbg_error_f851667af71bcfc6 = function (e, n) {
            try {
              console.error(u(e, n));
            } finally {
              b.__wbindgen_free(e, n);
            }
          }),
          (n.wbg.__wbindgen_jsval_loose_eq = function (e, n) {
            return e == n;
          }),
          (n.wbg.__wbg_String_88810dfeb4021902 = function (e, n) {
            const t = p(String(n), b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = l;
            (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
          }),
          (n.wbg.__wbg_getwithrefkey_5e6d9547403deab8 = function (e, n) {
            return e[n];
          }),
          (n.wbg.__wbg_set_841ac57cff3d672b = function (e, n, t) {
            e[n] = t;
          }),
          (n.wbg.__wbg_log_c9486ca5d8e2cbe8 = function (e, n) {
            try {
              console.log(u(e, n));
            } finally {
              b.__wbindgen_free(e, n);
            }
          }),
          (n.wbg.__wbg_log_aba5996d9bde071f = function (
            e,
            n,
            t,
            _,
            r,
            f,
            c,
            a
          ) {
            try {
              console.log(u(e, n), u(t, _), u(r, f), u(c, a));
            } finally {
              b.__wbindgen_free(e, n);
            }
          }),
          (n.wbg.__wbg_mark_40e050a77cc39fea = function (e, n) {
            performance.mark(u(e, n));
          }),
          (n.wbg.__wbg_measure_aa7a73f17813f708 = function () {
            return P(function (e, n, t, _) {
              try {
                performance.measure(u(e, n), u(t, _));
              } finally {
                b.__wbindgen_free(e, n), b.__wbindgen_free(t, _);
              }
            }, arguments);
          }),
          (n.wbg.__wbg_randomFillSync_6894564c2c334c42 = function () {
            return P(function (e, n, t) {
              e.randomFillSync(M(n, t));
            }, arguments);
          }),
          (n.wbg.__wbg_getRandomValues_805f1c3d65988a5a = function () {
            return P(function (e, n) {
              e.getRandomValues(n);
            }, arguments);
          }),
          (n.wbg.__wbg_crypto_e1d53a1d73fb10b8 = function (e) {
            return e.crypto;
          }),
          (n.wbg.__wbg_process_038c26bf42b093f8 = function (e) {
            return e.process;
          }),
          (n.wbg.__wbg_versions_ab37218d2f0b24a8 = function (e) {
            return e.versions;
          }),
          (n.wbg.__wbg_node_080f4b19d15bc1fe = function (e) {
            return e.node;
          }),
          (n.wbg.__wbg_msCrypto_6e7d3e1f92610cbb = function (e) {
            return e.msCrypto;
          }),
          (n.wbg.__wbg_require_78a3dcfbdba9cbce = function () {
            return P(function () {
              return e.require;
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_WebGl2RenderingContext_61bb2cb23346dbb7 =
            function (e) {
              let n;
              try {
                n = e instanceof WebGL2RenderingContext;
              } catch {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_beginQuery_fb152d8d84f2b130 = function (e, n, t) {
            e.beginQuery(n >>> 0, t);
          }),
          (n.wbg.__wbg_bindBufferRange_f2c529259df5358e = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.bindBufferRange(n >>> 0, t >>> 0, _, r, b);
          }),
          (n.wbg.__wbg_bindSampler_6eb88b542e5a410f = function (e, n, t) {
            e.bindSampler(n >>> 0, t);
          }),
          (n.wbg.__wbg_bindVertexArray_8b71290041cb6746 = function (e, n) {
            e.bindVertexArray(n);
          }),
          (n.wbg.__wbg_blitFramebuffer_86eee8a5763ded5e = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a,
            u,
            o
          ) {
            e.blitFramebuffer(n, t, _, r, b, f, c, a, u >>> 0, o >>> 0);
          }),
          (n.wbg.__wbg_bufferData_573e61c49a480c4d = function (e, n, t, _) {
            e.bufferData(n >>> 0, t, _ >>> 0);
          }),
          (n.wbg.__wbg_bufferData_16f948547d74c866 = function (e, n, t, _) {
            e.bufferData(n >>> 0, t, _ >>> 0);
          }),
          (n.wbg.__wbg_bufferSubData_c7180c0b681078e8 = function (e, n, t, _) {
            e.bufferSubData(n >>> 0, t, _);
          }),
          (n.wbg.__wbg_clearBufferfi_95daf829c568e58a = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.clearBufferfi(n >>> 0, t, _, r);
          }),
          (n.wbg.__wbg_clearBufferfv_b3c90fbed3b74920 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.clearBufferfv(n >>> 0, t, B(_, r));
          }),
          (n.wbg.__wbg_clearBufferiv_fe2a00a8f8fb7322 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.clearBufferiv(n >>> 0, t, k(_, r));
          }),
          (n.wbg.__wbg_clearBufferuiv_a41730a8d84c6ac6 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            var b, f;
            e.clearBufferuiv(
              n >>> 0,
              t,
              ((b = _), (f = r), F().subarray(b / 4, b / 4 + f))
            );
          }),
          (n.wbg.__wbg_clientWaitSync_ae8f3712f85a57fb = function (e, n, t, _) {
            return e.clientWaitSync(n, t >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_23b602b828848fb7 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a,
            u
          ) {
            e.compressedTexSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a, u);
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_d6c95fc640a9f4de = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a
          ) {
            e.compressedTexSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a);
          }),
          (n.wbg.__wbg_compressedTexSubImage3D_00b794917e65d559 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a,
            u,
            o,
            i
          ) {
            e.compressedTexSubImage3D(
              n >>> 0,
              t,
              _,
              r,
              b,
              f,
              c,
              a,
              u >>> 0,
              o,
              i
            );
          }),
          (n.wbg.__wbg_compressedTexSubImage3D_c9c7b42e0f7db586 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a,
            u,
            o
          ) {
            e.compressedTexSubImage3D(n >>> 0, t, _, r, b, f, c, a, u >>> 0, o);
          }),
          (n.wbg.__wbg_copyBufferSubData_c903618a0e0a9fca = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.copyBufferSubData(n >>> 0, t >>> 0, _, r, b);
          }),
          (n.wbg.__wbg_copyTexSubImage3D_88fc9e1c56d3e7db = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a,
            u
          ) {
            e.copyTexSubImage3D(n >>> 0, t, _, r, b, f, c, a, u);
          }),
          (n.wbg.__wbg_createQuery_42b609ba267d041d = function (e) {
            const n = e.createQuery();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createSampler_d1255ae3836b1bee = function (e) {
            const n = e.createSampler();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createVertexArray_de7292bbd7ea02dd = function (e) {
            const n = e.createVertexArray();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_deleteQuery_0981fb4d492e46a7 = function (e, n) {
            e.deleteQuery(n);
          }),
          (n.wbg.__wbg_deleteSampler_6d832d1900eafbea = function (e, n) {
            e.deleteSampler(n);
          }),
          (n.wbg.__wbg_deleteSync_f8f026807b7eee54 = function (e, n) {
            e.deleteSync(n);
          }),
          (n.wbg.__wbg_deleteVertexArray_dc4f1b2e5ac93f24 = function (e, n) {
            e.deleteVertexArray(n);
          }),
          (n.wbg.__wbg_drawArraysInstanced_1222b6236d008088 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.drawArraysInstanced(n >>> 0, t, _, r);
          }),
          (n.wbg.__wbg_drawBuffers_3223f0aeb44f7057 = function (e, n) {
            e.drawBuffers(n);
          }),
          (n.wbg.__wbg_drawElementsInstanced_b4714f8dd90fd2a8 = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.drawElementsInstanced(n >>> 0, t, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_endQuery_726967da9d5d1ca7 = function (e, n) {
            e.endQuery(n >>> 0);
          }),
          (n.wbg.__wbg_fenceSync_fb3e1185847ee462 = function (e, n, t) {
            const _ = e.fenceSync(n >>> 0, t >>> 0);
            return o(_) ? 0 : D(_);
          }),
          (n.wbg.__wbg_framebufferTextureLayer_e644333b8ec36f9d = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.framebufferTextureLayer(n >>> 0, t >>> 0, _, r, b);
          }),
          (n.wbg.__wbg_getBufferSubData_cd8138c86821bca3 = function (
            e,
            n,
            t,
            _
          ) {
            e.getBufferSubData(n >>> 0, t, _);
          }),
          (n.wbg.__wbg_getIndexedParameter_5f5c79f6c05edd18 = function () {
            return P(function (e, n, t) {
              return e.getIndexedParameter(n >>> 0, t >>> 0);
            }, arguments);
          }),
          (n.wbg.__wbg_getQueryParameter_e0f43fb85f793bbe = function (e, n, t) {
            return e.getQueryParameter(n, t >>> 0);
          }),
          (n.wbg.__wbg_getSyncParameter_b2f55318719e958c = function (e, n, t) {
            return e.getSyncParameter(n, t >>> 0);
          }),
          (n.wbg.__wbg_getUniformBlockIndex_a05b0c144aa49817 = function (
            e,
            n,
            t,
            _
          ) {
            return e.getUniformBlockIndex(n, u(t, _));
          }),
          (n.wbg.__wbg_invalidateFramebuffer_696c3c456c34a207 = function () {
            return P(function (e, n, t) {
              e.invalidateFramebuffer(n >>> 0, t);
            }, arguments);
          }),
          (n.wbg.__wbg_readBuffer_bade27c1171e00cf = function (e, n) {
            e.readBuffer(n >>> 0);
          }),
          (n.wbg.__wbg_readPixels_493558abd28a3b61 = function () {
            return P(function (e, n, t, _, r, b, f, c) {
              e.readPixels(n, t, _, r, b >>> 0, f >>> 0, c);
            }, arguments);
          }),
          (n.wbg.__wbg_readPixels_92102ee9fe1c81a0 = function () {
            return P(function (e, n, t, _, r, b, f, c) {
              e.readPixels(n, t, _, r, b >>> 0, f >>> 0, c);
            }, arguments);
          }),
          (n.wbg.__wbg_renderbufferStorageMultisample_9cb173d2fd461513 =
            function (e, n, t, _, r, b) {
              e.renderbufferStorageMultisample(n >>> 0, t, _ >>> 0, r, b);
            }),
          (n.wbg.__wbg_samplerParameterf_38ca759dc5c40461 = function (
            e,
            n,
            t,
            _
          ) {
            e.samplerParameterf(n, t >>> 0, _);
          }),
          (n.wbg.__wbg_samplerParameteri_c631c02ceefc6dc1 = function (
            e,
            n,
            t,
            _
          ) {
            e.samplerParameteri(n, t >>> 0, _);
          }),
          (n.wbg.__wbg_texImage2D_45fa34937f0d41eb = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u, o) {
              e.texImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                f,
                c >>> 0,
                a >>> 0,
                0 === u ? void 0 : M(u, o)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texStorage2D_89c29252632da923 = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.texStorage2D(n >>> 0, t, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_texStorage3D_3897fb6b91eb82d8 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f
          ) {
            e.texStorage3D(n >>> 0, t, _ >>> 0, r, b, f);
          }),
          (n.wbg.__wbg_texSubImage2D_6a8b0f3381d734c3 = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u) {
              e.texSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a >>> 0, u);
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_53b6a050a0b9b24e = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u) {
              e.texSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a >>> 0, u);
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_75941cc7af95dbe0 = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u) {
              e.texSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a >>> 0, u);
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_eec64ab194e54dc5 = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u) {
              e.texSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a >>> 0, u);
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_bb1504dd3641be28 = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u) {
              e.texSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a >>> 0, u);
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_84ef903e11598af0 = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u, o, i) {
              e.texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                f,
                c,
                a,
                u >>> 0,
                o >>> 0,
                i
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_f563114226a95faf = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u, o, i) {
              e.texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                f,
                c,
                a,
                u >>> 0,
                o >>> 0,
                i
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_0a4fbb250617ca13 = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u, o, i) {
              e.texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                f,
                c,
                a,
                u >>> 0,
                o >>> 0,
                i
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_e8042ab768cdd214 = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u, o, i) {
              e.texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                f,
                c,
                a,
                u >>> 0,
                o >>> 0,
                i
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_1d82135e9ce965bf = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u, o, i) {
              e.texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                f,
                c,
                a,
                u >>> 0,
                o >>> 0,
                i
              );
            }, arguments);
          }),
          (n.wbg.__wbg_uniform2fv_ffd0b1d3c3a4070a = function (e, n, t, _) {
            e.uniform2fv(n, B(t, _));
          }),
          (n.wbg.__wbg_uniform2iv_32329f9a4d491136 = function (e, n, t, _) {
            e.uniform2iv(n, k(t, _));
          }),
          (n.wbg.__wbg_uniform3fv_bc831e48acb2c057 = function (e, n, t, _) {
            e.uniform3fv(n, B(t, _));
          }),
          (n.wbg.__wbg_uniform3iv_100a284f5a3cbca5 = function (e, n, t, _) {
            e.uniform3iv(n, k(t, _));
          }),
          (n.wbg.__wbg_uniform4fv_26d822da5c3fdb00 = function (e, n, t, _) {
            e.uniform4fv(n, B(t, _));
          }),
          (n.wbg.__wbg_uniform4iv_7f03c41e6e49bbd6 = function (e, n, t, _) {
            e.uniform4iv(n, k(t, _));
          }),
          (n.wbg.__wbg_uniformBlockBinding_1971f4528d9c3043 = function (
            e,
            n,
            t,
            _
          ) {
            e.uniformBlockBinding(n, t >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_uniformMatrix2fv_5f1f56c7cbfb533f = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.uniformMatrix2fv(n, 0 !== t, B(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix3fv_ae9271db8127a57b = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.uniformMatrix3fv(n, 0 !== t, B(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix4fv_0f42d678a568ded9 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.uniformMatrix4fv(n, 0 !== t, B(_, r));
          }),
          (n.wbg.__wbg_vertexAttribDivisor_77f020121066a4d9 = function (
            e,
            n,
            t
          ) {
            e.vertexAttribDivisor(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_vertexAttribIPointer_b15ad1437a268cf5 = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.vertexAttribIPointer(n >>> 0, t, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_activeTexture_0daf7c1698e49f00 = function (e, n) {
            e.activeTexture(n >>> 0);
          }),
          (n.wbg.__wbg_attachShader_3038234860d2d59d = function (e, n, t) {
            e.attachShader(n, t);
          }),
          (n.wbg.__wbg_bindBuffer_9cb064991696b79f = function (e, n, t) {
            e.bindBuffer(n >>> 0, t);
          }),
          (n.wbg.__wbg_bindFramebuffer_0522db2a250c29f0 = function (e, n, t) {
            e.bindFramebuffer(n >>> 0, t);
          }),
          (n.wbg.__wbg_bindRenderbuffer_1e4928d9bf839c02 = function (e, n, t) {
            e.bindRenderbuffer(n >>> 0, t);
          }),
          (n.wbg.__wbg_bindTexture_0c284b1604ba527c = function (e, n, t) {
            e.bindTexture(n >>> 0, t);
          }),
          (n.wbg.__wbg_blendColor_a17ddceb3534e0b3 = function (e, n, t, _, r) {
            e.blendColor(n, t, _, r);
          }),
          (n.wbg.__wbg_blendEquation_b5d5be767bd3835a = function (e, n) {
            e.blendEquation(n >>> 0);
          }),
          (n.wbg.__wbg_blendEquationSeparate_d2fa3b718ee3579f = function (
            e,
            n,
            t
          ) {
            e.blendEquationSeparate(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_blendFunc_d456b0c766f8dbc9 = function (e, n, t) {
            e.blendFunc(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_blendFuncSeparate_9a7146974b3cd76d = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.blendFuncSeparate(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_colorMask_a7f067283ed312c9 = function (e, n, t, _, r) {
            e.colorMask(0 !== n, 0 !== t, 0 !== _, 0 !== r);
          }),
          (n.wbg.__wbg_compileShader_af777dd3b15798b3 = function (e, n) {
            e.compileShader(n);
          }),
          (n.wbg.__wbg_copyTexSubImage2D_47b14ff8459fd4c8 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a
          ) {
            e.copyTexSubImage2D(n >>> 0, t, _, r, b, f, c, a);
          }),
          (n.wbg.__wbg_createBuffer_5ed0554ab35780b5 = function (e) {
            const n = e.createBuffer();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createFramebuffer_86883935c13ddd59 = function (e) {
            const n = e.createFramebuffer();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createProgram_7d25c1dd3bb0ce39 = function (e) {
            const n = e.createProgram();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createRenderbuffer_b392324e044d389a = function (e) {
            const n = e.createRenderbuffer();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createShader_96339db58713e350 = function (e, n) {
            const t = e.createShader(n >>> 0);
            return o(t) ? 0 : D(t);
          }),
          (n.wbg.__wbg_createTexture_c651f9e28d1ce9d2 = function (e) {
            const n = e.createTexture();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_cullFace_79e4ddbea13278b3 = function (e, n) {
            e.cullFace(n >>> 0);
          }),
          (n.wbg.__wbg_deleteBuffer_cf67a696a7857b3f = function (e, n) {
            e.deleteBuffer(n);
          }),
          (n.wbg.__wbg_deleteFramebuffer_f9c2bceeb5422d9d = function (e, n) {
            e.deleteFramebuffer(n);
          }),
          (n.wbg.__wbg_deleteProgram_9c8fa1ef341cb01d = function (e, n) {
            e.deleteProgram(n);
          }),
          (n.wbg.__wbg_deleteRenderbuffer_cad502ac8d1398f2 = function (e, n) {
            e.deleteRenderbuffer(n);
          }),
          (n.wbg.__wbg_deleteShader_f48f72524f5ee3ed = function (e, n) {
            e.deleteShader(n);
          }),
          (n.wbg.__wbg_deleteTexture_1b5f5e536e0d5545 = function (e, n) {
            e.deleteTexture(n);
          }),
          (n.wbg.__wbg_depthFunc_2060ec3687ac1f95 = function (e, n) {
            e.depthFunc(n >>> 0);
          }),
          (n.wbg.__wbg_depthMask_27d367443a80541d = function (e, n) {
            e.depthMask(0 !== n);
          }),
          (n.wbg.__wbg_depthRange_7109c2393819a37b = function (e, n, t) {
            e.depthRange(n, t);
          }),
          (n.wbg.__wbg_disable_3adb8645ea1d92d4 = function (e, n) {
            e.disable(n >>> 0);
          }),
          (n.wbg.__wbg_disableVertexAttribArray_f469283fda607cee = function (
            e,
            n
          ) {
            e.disableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_drawArrays_84de8a2416396807 = function (e, n, t, _) {
            e.drawArrays(n >>> 0, t, _);
          }),
          (n.wbg.__wbg_enable_1ac9f14a577b7c8b = function (e, n) {
            e.enable(n >>> 0);
          }),
          (n.wbg.__wbg_enableVertexAttribArray_53139716d9c95dba = function (
            e,
            n
          ) {
            e.enableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_framebufferRenderbuffer_77bdb2f359a5728f = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.framebufferRenderbuffer(n >>> 0, t >>> 0, _ >>> 0, r);
          }),
          (n.wbg.__wbg_framebufferTexture2D_885176f16a153fec = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.framebufferTexture2D(n >>> 0, t >>> 0, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_frontFace_3d7784c56ffede8a = function (e, n) {
            e.frontFace(n >>> 0);
          }),
          (n.wbg.__wbg_getActiveUniform_9c4ac7c1ccf5f894 = function (e, n, t) {
            const _ = e.getActiveUniform(n, t >>> 0);
            return o(_) ? 0 : D(_);
          }),
          (n.wbg.__wbg_getError_a472f86b6aa9ea71 = function (e) {
            return e.getError();
          }),
          (n.wbg.__wbg_getExtension_f0070583175271d4 = function () {
            return P(function (e, n, t) {
              const _ = e.getExtension(u(n, t));
              return o(_) ? 0 : D(_);
            }, arguments);
          }),
          (n.wbg.__wbg_getParameter_56d47f9b55e463d4 = function () {
            return P(function (e, n) {
              return e.getParameter(n >>> 0);
            }, arguments);
          }),
          (n.wbg.__wbg_getProgramInfoLog_7654794297967ac0 = function (e, n, t) {
            const _ = n.getProgramInfoLog(t);
            var r = o(_) ? 0 : p(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = l;
            (d()[e / 4 + 1] = f), (d()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbg_getProgramParameter_5b1a40917aa850f8 = function (
            e,
            n,
            t
          ) {
            return e.getProgramParameter(n, t >>> 0);
          }),
          (n.wbg.__wbg_getShaderInfoLog_915d0e8506c11159 = function (e, n, t) {
            const _ = n.getShaderInfoLog(t);
            var r = o(_) ? 0 : p(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = l;
            (d()[e / 4 + 1] = f), (d()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbg_getShaderParameter_f9240892c9e7a0a3 = function (
            e,
            n,
            t
          ) {
            return e.getShaderParameter(n, t >>> 0);
          }),
          (n.wbg.__wbg_getSupportedExtensions_7af8f7bbdd4d7b2c = function (e) {
            const n = e.getSupportedExtensions();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_getUniformLocation_c6caabb349b43da7 = function (
            e,
            n,
            t,
            _
          ) {
            const r = e.getUniformLocation(n, u(t, _));
            return o(r) ? 0 : D(r);
          }),
          (n.wbg.__wbg_linkProgram_2d5cc584654696b8 = function (e, n) {
            e.linkProgram(n);
          }),
          (n.wbg.__wbg_pixelStorei_a0b83efc92cd29fe = function (e, n, t) {
            e.pixelStorei(n >>> 0, t);
          }),
          (n.wbg.__wbg_polygonOffset_03d3955d5a1afa08 = function (e, n, t) {
            e.polygonOffset(n, t);
          }),
          (n.wbg.__wbg_renderbufferStorage_2192d9cd09128339 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.renderbufferStorage(n >>> 0, t >>> 0, _, r);
          }),
          (n.wbg.__wbg_scissor_2b084e0dc81d67f4 = function (e, n, t, _, r) {
            e.scissor(n, t, _, r);
          }),
          (n.wbg.__wbg_shaderSource_57883245cdfb0dca = function (e, n, t, _) {
            e.shaderSource(n, u(t, _));
          }),
          (n.wbg.__wbg_stencilFuncSeparate_3be68afd7ca6efcc = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.stencilFuncSeparate(n >>> 0, t >>> 0, _, r >>> 0);
          }),
          (n.wbg.__wbg_stencilMask_144b86d15d9fdbe6 = function (e, n) {
            e.stencilMask(n >>> 0);
          }),
          (n.wbg.__wbg_stencilMaskSeparate_84a2494b967772c7 = function (
            e,
            n,
            t
          ) {
            e.stencilMaskSeparate(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_stencilOpSeparate_1708aea1aea0dc48 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.stencilOpSeparate(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_texParameteri_e0ce3810261e0864 = function (e, n, t, _) {
            e.texParameteri(n >>> 0, t >>> 0, _);
          }),
          (n.wbg.__wbg_uniform1f_dcc6951bde745417 = function (e, n, t) {
            e.uniform1f(n, t);
          }),
          (n.wbg.__wbg_uniform1i_4fdc6d6740375d22 = function (e, n, t) {
            e.uniform1i(n, t);
          }),
          (n.wbg.__wbg_uniform4f_19b349303edb7836 = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.uniform4f(n, t, _, r, b);
          }),
          (n.wbg.__wbg_useProgram_2f4094faf45ecba1 = function (e, n) {
            e.useProgram(n);
          }),
          (n.wbg.__wbg_vertexAttribPointer_ad370785358334f4 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f
          ) {
            e.vertexAttribPointer(n >>> 0, t, _ >>> 0, 0 !== r, b, f);
          }),
          (n.wbg.__wbg_viewport_cc41e28a71c23915 = function (e, n, t, _, r) {
            e.viewport(n, t, _, r);
          }),
          (n.wbg.__wbg_instanceof_Window_e266f02eee43b570 = function (e) {
            let n;
            try {
              n = e instanceof Window;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_document_950215a728589a2d = function (e) {
            const n = e.document;
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_location_797a1856892cc2de = function (e) {
            return e.location;
          }),
          (n.wbg.__wbg_devicePixelRatio_5f8f5cab76864090 = function (e) {
            return e.devicePixelRatio;
          }),
          (n.wbg.__wbg_localStorage_42608208af988a02 = function () {
            return P(function (e) {
              const n = e.localStorage;
              return o(n) ? 0 : D(n);
            }, arguments);
          }),
          (n.wbg.__wbg_cancelAnimationFrame_d079cdb83bc43b26 = function () {
            return P(function (e, n) {
              e.cancelAnimationFrame(n);
            }, arguments);
          }),
          (n.wbg.__wbg_focus_501a2f26ca842755 = function () {
            return P(function (e) {
              e.focus();
            }, arguments);
          }),
          (n.wbg.__wbg_open_caf5dfe2d159a600 = function () {
            return P(function (e, n, t, _, r) {
              const b = e.open(u(n, t), u(_, r));
              return o(b) ? 0 : D(b);
            }, arguments);
          }),
          (n.wbg.__wbg_requestAnimationFrame_afe426b568f84138 = function () {
            return P(function (e, n) {
              return e.requestAnimationFrame(n);
            }, arguments);
          }),
          (n.wbg.__wbg_fetch_465e8cb61a0f43ea = function (e, n) {
            return e.fetch(n);
          }),
          (n.wbg.__wbg_length_3d941f2faff8f45f = function (e) {
            return e.length;
          }),
          (n.wbg.__wbg_setbuffer_bad384d1628a8306 = function (e, n) {
            e.buffer = n;
          }),
          (n.wbg.__wbg_setonended_15b13187aec41ac9 = function (e, n) {
            e.onended = n;
          }),
          (n.wbg.__wbg_start_9169e040a16354b9 = function () {
            return P(function (e, n) {
              e.start(n);
            }, arguments);
          }),
          (n.wbg.__wbg_connect_77f2f818a74097e1 = function () {
            return P(function (e, n) {
              return e.connect(n);
            }, arguments);
          }),
          (n.wbg.__wbg_bindVertexArrayOES_688eba003a98a0bb = function (e, n) {
            e.bindVertexArrayOES(n);
          }),
          (n.wbg.__wbg_createVertexArrayOES_02cfe655604046eb = function (e) {
            const n = e.createVertexArrayOES();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_deleteVertexArrayOES_ba22911f739464a7 = function (e, n) {
            e.deleteVertexArrayOES(n);
          }),
          (n.wbg.__wbg_pointerId_d2caae4465ba386f = function (e) {
            return e.pointerId;
          }),
          (n.wbg.__wbg_deltaY_b32fa858e16edcc0 = function (e) {
            return e.deltaY;
          }),
          (n.wbg.__wbg_deltaMode_11f7b19e64d9a515 = function (e) {
            return e.deltaMode;
          }),
          (n.wbg.__wbg_new_91fc1a4631302ab0 = function () {
            return P(function () {
              return new Path2D();
            }, arguments);
          }),
          (n.wbg.__wbg_addPath_a432e963af597979 = function (e, n, t) {
            e.addPath(n, t);
          }),
          (n.wbg.__wbg_closePath_2502f819d3c4221a = function (e) {
            e.closePath();
          }),
          (n.wbg.__wbg_lineTo_ee1745e5c68d4536 = function (e, n, t) {
            e.lineTo(n, t);
          }),
          (n.wbg.__wbg_moveTo_6d6ab8291735715c = function (e, n, t) {
            e.moveTo(n, t);
          }),
          (n.wbg.__wbg_quadraticCurveTo_784a886737574a7b = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.quadraticCurveTo(n, t, _, r);
          }),
          (n.wbg.__wbg_rect_d4f6bcd28d1ccc7c = function (e, n, t, _, r) {
            e.rect(n, t, _, r);
          }),
          (n.wbg.__wbg_now_c644db5194be8437 = function (e) {
            return e.now();
          }),
          (n.wbg.__wbg_setTransform_756fc659a51a3e91 = function (e, n) {
            e.setTransform(n);
          }),
          (n.wbg.__wbg_instanceof_HtmlCanvasElement_f5f69dab93281ebe =
            function (e) {
              let n;
              try {
                n = e instanceof HTMLCanvasElement;
              } catch {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_width_a40e21a22129b197 = function (e) {
            return e.width;
          }),
          (n.wbg.__wbg_setwidth_81c62bc806e0a727 = function (e, n) {
            e.width = n >>> 0;
          }),
          (n.wbg.__wbg_height_98d51321254345a5 = function (e) {
            return e.height;
          }),
          (n.wbg.__wbg_setheight_98cf0db22c40ef07 = function (e, n) {
            e.height = n >>> 0;
          }),
          (n.wbg.__wbg_getContext_3ae404b649cf9287 = function () {
            return P(function (e, n, t) {
              const _ = e.getContext(u(n, t));
              return o(_) ? 0 : D(_);
            }, arguments);
          }),
          (n.wbg.__wbg_getContext_89a318b610dc5fd4 = function () {
            return P(function (e, n, t, _) {
              const r = e.getContext(u(n, t), _);
              return o(r) ? 0 : D(r);
            }, arguments);
          }),
          (n.wbg.__wbg_drawBuffersWEBGL_dfb0d803ea7ebe07 = function (e, n) {
            e.drawBuffersWEBGL(n);
          }),
          (n.wbg.__wbg_videoWidth_41c6e04eac7ce78b = function (e) {
            return e.videoWidth;
          }),
          (n.wbg.__wbg_videoHeight_8ef0e09e1674d6fc = function (e) {
            return e.videoHeight;
          }),
          (n.wbg.__wbg_newwithstrandinit_c45f0dc6da26fd03 = function () {
            return P(function (e, n, t) {
              return new Request(u(e, n), t);
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_CanvasRenderingContext2d_3e95629461ed9f67 =
            function (e) {
              let n;
              try {
                n = e instanceof CanvasRenderingContext2D;
              } catch {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_setglobalAlpha_9b247016ca5b7baf = function (e, n) {
            e.globalAlpha = n;
          }),
          (n.wbg.__wbg_setglobalCompositeOperation_7c8142daf951a34d =
            function () {
              return P(function (e, n, t) {
                e.globalCompositeOperation = u(n, t);
              }, arguments);
            }),
          (n.wbg.__wbg_setstrokeStyle_073fc10b086c1727 = function (e, n) {
            e.strokeStyle = n;
          }),
          (n.wbg.__wbg_setfillStyle_b065cfad34a78974 = function (e, n) {
            e.fillStyle = n;
          }),
          (n.wbg.__wbg_setfilter_39d01028434c0e3c = function (e, n, t) {
            e.filter = u(n, t);
          }),
          (n.wbg.__wbg_setimageSmoothingEnabled_bf2992e4332c028e = function (
            e,
            n
          ) {
            e.imageSmoothingEnabled = 0 !== n;
          }),
          (n.wbg.__wbg_setlineWidth_2b5a5da5c4bf4084 = function (e, n) {
            e.lineWidth = n;
          }),
          (n.wbg.__wbg_setlineCap_a2933c0b1d64ae1b = function (e, n, t) {
            e.lineCap = u(n, t);
          }),
          (n.wbg.__wbg_setlineJoin_a630a26a037775c0 = function (e, n, t) {
            e.lineJoin = u(n, t);
          }),
          (n.wbg.__wbg_setmiterLimit_9632926e0263a940 = function (e, n) {
            e.miterLimit = n;
          }),
          (n.wbg.__wbg_drawImage_595c29d3eb1971b5 = function () {
            return P(function (e, n, t, _) {
              e.drawImage(n, t, _);
            }, arguments);
          }),
          (n.wbg.__wbg_clip_3076bfd713f8dbdf = function (e, n, t) {
            e.clip(n, t);
          }),
          (n.wbg.__wbg_fill_f544035cc39a9a33 = function (e, n, t) {
            e.fill(n, t);
          }),
          (n.wbg.__wbg_stroke_f3b4581ac28cc0a3 = function (e, n) {
            e.stroke(n);
          }),
          (n.wbg.__wbg_createLinearGradient_07e75b1061695061 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            return e.createLinearGradient(n, t, _, r);
          }),
          (n.wbg.__wbg_createPattern_ffbbf4d7c9d4d6ec = function () {
            return P(function (e, n, t, _) {
              const r = e.createPattern(n, u(t, _));
              return o(r) ? 0 : D(r);
            }, arguments);
          }),
          (n.wbg.__wbg_createRadialGradient_fc473c7e83808cb8 = function () {
            return P(function (e, n, t, _, r, b, f) {
              return e.createRadialGradient(n, t, _, r, b, f);
            }, arguments);
          }),
          (n.wbg.__wbg_putImageData_3d6a58a9eb5f743c = function () {
            return P(function (e, n, t, _) {
              e.putImageData(n, t, _);
            }, arguments);
          }),
          (n.wbg.__wbg_clearRect_92c5351269c74162 = function (e, n, t, _, r) {
            e.clearRect(n, t, _, r);
          }),
          (n.wbg.__wbg_fillRect_f63ba845233f000a = function (e, n, t, _, r) {
            e.fillRect(n, t, _, r);
          }),
          (n.wbg.__wbg_restore_38b3fc1b40a29757 = function (e) {
            e.restore();
          }),
          (n.wbg.__wbg_save_bab01f1913b2e819 = function (e) {
            e.save();
          }),
          (n.wbg.__wbg_resetTransform_cb5911b6d0ba3407 = function () {
            return P(function (e) {
              e.resetTransform();
            }, arguments);
          }),
          (n.wbg.__wbg_setTransform_a0b25774ef0bfce8 = function () {
            return P(function (e, n, t, _, r, b, f) {
              e.setTransform(n, t, _, r, b, f);
            }, arguments);
          }),
          (n.wbg.__wbg_transform_a73a1d3cba69df05 = function () {
            return P(function (e, n, t, _, r, b, f) {
              e.transform(n, t, _, r, b, f);
            }, arguments);
          }),
          (n.wbg.__wbg_key_f0decac219aa904b = function (e, n) {
            const t = p(n.key, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = l;
            (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
          }),
          (n.wbg.__wbg_code_aed21120de275a12 = function (e, n) {
            const t = p(n.code, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = l;
            (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
          }),
          (n.wbg.__wbg_body_be46234bb33edd63 = function (e) {
            const n = e.body;
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createElement_e2a0e21263eb5416 = function () {
            return P(function (e, n, t) {
              return e.createElement(u(n, t));
            }, arguments);
          }),
          (n.wbg.__wbg_createElementNS_0047de728927ea00 = function () {
            return P(function (e, n, t, _, r) {
              return e.createElementNS(0 === n ? void 0 : u(n, t), u(_, r));
            }, arguments);
          }),
          (n.wbg.__wbg_querySelector_32b9d7ebb2df951d = function () {
            return P(function (e, n, t) {
              const _ = e.querySelector(u(n, t));
              return o(_) ? 0 : D(_);
            }, arguments);
          }),
          (n.wbg.__wbg_newwithbuffersourcesequenceandoptions_a27e5c2fc0c23746 =
            function () {
              return P(function (e, n) {
                return new Blob(e, n);
              }, arguments);
            }),
          (n.wbg.__wbg_a_ba51426af54c677a = function (e) {
            return e.a;
          }),
          (n.wbg.__wbg_seta_d92bb829a04c9bc2 = function (e, n) {
            e.a = n;
          }),
          (n.wbg.__wbg_b_e353e5af8fd790ff = function (e) {
            return e.b;
          }),
          (n.wbg.__wbg_c_91d2dab8416e22a4 = function (e) {
            return e.c;
          }),
          (n.wbg.__wbg_d_9120f075783411ea = function (e) {
            return e.d;
          }),
          (n.wbg.__wbg_setd_5f7fd53a3541c258 = function (e, n) {
            e.d = n;
          }),
          (n.wbg.__wbg_e_65a8131ab187edae = function (e) {
            return e.e;
          }),
          (n.wbg.__wbg_f_1302e186f63f1fc6 = function (e) {
            return e.f;
          }),
          (n.wbg.__wbg_new_41b8477bcd57c70f = function () {
            return P(function () {
              return new DOMMatrix();
            }, arguments);
          }),
          (n.wbg.__wbg_newwitharray64_14a5abd2f65d41fc = function () {
            return P(function (e, n) {
              var t, _;
              return new DOMMatrix(
                ((t = e), (_ = n), g().subarray(t / 8, t / 8 + _))
              );
            }, arguments);
          }),
          (n.wbg.__wbg_addEventListener_615d4590d38da1c9 = function () {
            return P(function (e, n, t, _) {
              e.addEventListener(u(n, t), _);
            }, arguments);
          }),
          (n.wbg.__wbg_addEventListener_cf5b03cd29763277 = function () {
            return P(function (e, n, t, _, r) {
              e.addEventListener(u(n, t), _, r);
            }, arguments);
          }),
          (n.wbg.__wbg_addEventListener_b1286394a632c3c9 = function () {
            return P(function (e, n, t, _, r) {
              e.addEventListener(u(n, t), _, 0 !== r);
            }, arguments);
          }),
          (n.wbg.__wbg_removeEventListener_86fd19ed073cd1ed = function () {
            return P(function (e, n, t, _) {
              e.removeEventListener(u(n, t), _);
            }, arguments);
          }),
          (n.wbg.__wbg_removeEventListener_b25f5db74f767386 = function () {
            return P(function (e, n, t, _, r) {
              e.removeEventListener(u(n, t), _, 0 !== r);
            }, arguments);
          }),
          (n.wbg.__wbg_baseURI_183bb1b65bdb30f8 = function () {
            return P(function (e, n) {
              const t = n.baseURI;
              var _ = o(t)
                  ? 0
                  : p(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
                r = l;
              (d()[e / 4 + 1] = r), (d()[e / 4 + 0] = _);
            }, arguments);
          }),
          (n.wbg.__wbg_appendChild_b8199dc1655c852d = function () {
            return P(function (e, n) {
              return e.appendChild(n);
            }, arguments);
          }),
          (n.wbg.__wbg_setid_3ffcf3ad6af1d07c = function (e, n, t) {
            e.id = u(n, t);
          }),
          (n.wbg.__wbg_clientWidth_1fa51f20a3bebbbf = function (e) {
            return e.clientWidth;
          }),
          (n.wbg.__wbg_clientHeight_0fe149fdad1fe046 = function (e) {
            return e.clientHeight;
          }),
          (n.wbg.__wbg_querySelector_de6e6a6226107104 = function () {
            return P(function (e, n, t) {
              const _ = e.querySelector(u(n, t));
              return o(_) ? 0 : D(_);
            }, arguments);
          }),
          (n.wbg.__wbg_releasePointerCapture_b0063bfa1890f17b = function () {
            return P(function (e, n) {
              e.releasePointerCapture(n);
            }, arguments);
          }),
          (n.wbg.__wbg_setAttribute_79c9562d32d05e66 = function () {
            return P(function (e, n, t, _, r) {
              e.setAttribute(u(n, t), u(_, r));
            }, arguments);
          }),
          (n.wbg.__wbg_setAttributeNS_6226a35b93f5c79c = function () {
            return P(function (e, n, t, _, r, b, f) {
              e.setAttributeNS(0 === n ? void 0 : u(n, t), u(_, r), u(b, f));
            }, arguments);
          }),
          (n.wbg.__wbg_setPointerCapture_5479dc0d082282b7 = function () {
            return P(function (e, n) {
              e.setPointerCapture(n);
            }, arguments);
          }),
          (n.wbg.__wbg_remove_b18bc815630b67ec = function (e) {
            e.remove();
          }),
          (n.wbg.__wbg_currentTarget_6aa9bd5069eb82e8 = function (e) {
            const n = e.currentTarget;
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_preventDefault_16b2170b12f56317 = function (e) {
            e.preventDefault();
          }),
          (n.wbg.__wbg_newwithu8clampedarray_21093ce0fda74d0a = function () {
            return P(function (e, n, t) {
              return new ImageData(
                ((_ = e),
                (r = n),
                ((null !== C && 0 !== C.byteLength) ||
                  (C = new Uint8ClampedArray(b.memory.buffer)),
                C).subarray(_ / 1, _ / 1 + r)),
                t >>> 0
              );
              var _, r;
            }, arguments);
          }),
          (n.wbg.__wbg_href_bb86bb94d1c6861b = function () {
            return P(function (e, n) {
              const t = p(n.href, b.__wbindgen_malloc, b.__wbindgen_realloc),
                _ = l;
              (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
            }, arguments);
          }),
          (n.wbg.__wbg_protocol_3767aa51aa3121ca = function () {
            return P(function (e, n) {
              const t = p(
                  n.protocol,
                  b.__wbindgen_malloc,
                  b.__wbindgen_realloc
                ),
                _ = l;
              (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
            }, arguments);
          }),
          (n.wbg.__wbg_assign_6a2665722c186353 = function () {
            return P(function (e, n, t) {
              e.assign(u(n, t));
            }, arguments);
          }),
          (n.wbg.__wbg_width_8a17f65e11a44bf6 = function (e) {
            return e.width;
          }),
          (n.wbg.__wbg_height_641410e41fce27a6 = function (e) {
            return e.height;
          }),
          (n.wbg.__wbg_get_bbc28d9c36fb00ee = function () {
            return P(function (e, n, t, _) {
              const r = n[u(t, _)];
              var f = o(r)
                  ? 0
                  : p(r, b.__wbindgen_malloc, b.__wbindgen_realloc),
                c = l;
              (d()[e / 4 + 1] = c), (d()[e / 4 + 0] = f);
            }, arguments);
          }),
          (n.wbg.__wbg_set_7165e34f03bd8242 = function () {
            return P(function (e, n, t, _, r) {
              e[u(n, t)] = u(_, r);
            }, arguments);
          }),
          (n.wbg.__wbg_delete_f035c92bf260a2e2 = function () {
            return P(function (e, n, t) {
              delete e[u(n, t)];
            }, arguments);
          }),
          (n.wbg.__wbg_size_5ce324b99223d189 = function (e) {
            return e.size;
          }),
          (n.wbg.__wbg_type_979610383a4b7c57 = function (e) {
            return e.type;
          }),
          (n.wbg.__wbg_name_1e6651aff4fe7a88 = function (e, n) {
            const t = p(n.name, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = l;
            (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
          }),
          (n.wbg.__wbg_drawArraysInstancedANGLE_403faa11d52ccf6d = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.drawArraysInstancedANGLE(n >>> 0, t, _, r);
          }),
          (n.wbg.__wbg_drawElementsInstancedANGLE_0230afc27cf9cec9 = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.drawElementsInstancedANGLE(n >>> 0, t, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_vertexAttribDivisorANGLE_6bbb3df4c6e7d08b = function (
            e,
            n,
            t
          ) {
            e.vertexAttribDivisorANGLE(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_destination_5dfc354bcf2eb941 = function (e) {
            return e.destination;
          }),
          (n.wbg.__wbg_sampleRate_1fe9798ab15b5fe2 = function (e) {
            return e.sampleRate;
          }),
          (n.wbg.__wbg_currentTime_d94729a1b5fd59a5 = function (e) {
            return e.currentTime;
          }),
          (n.wbg.__wbg_new_80c6bdc66ebfa0b7 = function () {
            return P(function () {
              return new r();
            }, arguments);
          }),
          (n.wbg.__wbg_close_82409a9d656a7c26 = function () {
            return P(function (e) {
              return e.close();
            }, arguments);
          }),
          (n.wbg.__wbg_suspend_248307f8f9d87bd4 = function () {
            return P(function (e) {
              return e.suspend();
            }, arguments);
          }),
          (n.wbg.__wbg_createBuffer_d142e00390bff447 = function () {
            return P(function (e, n, t, _) {
              return e.createBuffer(n >>> 0, t >>> 0, _);
            }, arguments);
          }),
          (n.wbg.__wbg_createBufferSource_1473226efd418a08 = function () {
            return P(function (e) {
              return e.createBufferSource();
            }, arguments);
          }),
          (n.wbg.__wbg_resume_72fe7cd3e68b861a = function () {
            return P(function (e) {
              return e.resume();
            }, arguments);
          }),
          (n.wbg.__wbg_addColorStop_551ac167fe2ad6b1 = function () {
            return P(function (e, n, t, _) {
              e.addColorStop(n, u(t, _));
            }, arguments);
          }),
          (n.wbg.__wbg_setProperty_21e2e7868b86a93e = function () {
            return P(function (e, n, t, _, r) {
              e.setProperty(u(n, t), u(_, r));
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_HtmlFormElement_04e7484e36bd99d6 = function (
            e
          ) {
            let n;
            try {
              n = e instanceof HTMLFormElement;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_submit_d5162ad94d3182b1 = function () {
            return P(function (e) {
              e.submit();
            }, arguments);
          }),
          (n.wbg.__wbg_width_716d2242c9bd6c20 = function (e) {
            return e.width;
          }),
          (n.wbg.__wbg_height_d45e4d57562f8ae0 = function (e) {
            return e.height;
          }),
          (n.wbg.__wbg_framebufferTextureMultiviewOVR_0ae55d2aa52fd2cb =
            function (e, n, t, _, r, b, f) {
              e.framebufferTextureMultiviewOVR(n >>> 0, t >>> 0, _, r, b, f);
            }),
          (n.wbg.__wbg_instanceof_WebGlRenderingContext_1f34d107adf90e57 =
            function (e) {
              let n;
              try {
                n = e instanceof WebGLRenderingContext;
              } catch {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_drawingBufferWidth_58a727aa7a345aa8 = function (e) {
            return e.drawingBufferWidth;
          }),
          (n.wbg.__wbg_drawingBufferHeight_bd91270bae19069e = function (e) {
            return e.drawingBufferHeight;
          }),
          (n.wbg.__wbg_bufferData_05664df801d7aec0 = function (e, n, t, _) {
            e.bufferData(n >>> 0, t, _ >>> 0);
          }),
          (n.wbg.__wbg_bufferData_023700b2ed207c43 = function (e, n, t, _) {
            e.bufferData(n >>> 0, t, _ >>> 0);
          }),
          (n.wbg.__wbg_bufferData_3daa5b6910265e45 = function (e, n, t, _, r) {
            e.bufferData(n >>> 0, M(t, _), r >>> 0);
          }),
          (n.wbg.__wbg_bufferSubData_4e653f611d7a962d = function (e, n, t, _) {
            e.bufferSubData(n >>> 0, t, _);
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_788296e97b316838 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a
          ) {
            e.compressedTexSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a);
          }),
          (n.wbg.__wbg_readPixels_30de7174c15126d3 = function () {
            return P(function (e, n, t, _, r, b, f, c) {
              e.readPixels(n, t, _, r, b >>> 0, f >>> 0, c);
            }, arguments);
          }),
          (n.wbg.__wbg_texImage2D_d5a54e57be204e4a = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u, o) {
              e.texImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                f,
                c >>> 0,
                a >>> 0,
                0 === u ? void 0 : M(u, o)
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_57792696288b0a61 = function () {
            return P(function (e, n, t, _, r, b, f, c, a, u) {
              e.texSubImage2D(n >>> 0, t, _, r, b, f, c >>> 0, a >>> 0, u);
            }, arguments);
          }),
          (n.wbg.__wbg_uniform1fv_18139e7937b2eeda = function (e, n, t, _) {
            e.uniform1fv(n, B(t, _));
          }),
          (n.wbg.__wbg_uniform2fv_c29ce786946f1aae = function (e, n, t, _) {
            e.uniform2fv(n, B(t, _));
          }),
          (n.wbg.__wbg_uniform2iv_58c3d5ee9e70c71d = function (e, n, t, _) {
            e.uniform2iv(n, k(t, _));
          }),
          (n.wbg.__wbg_uniform3fv_5ca48b3279e0c643 = function (e, n, t, _) {
            e.uniform3fv(n, B(t, _));
          }),
          (n.wbg.__wbg_uniform3iv_0a103fe131bd9213 = function (e, n, t, _) {
            e.uniform3iv(n, k(t, _));
          }),
          (n.wbg.__wbg_uniform4fv_14f1c5ef10bfb4c9 = function (e, n, t, _) {
            e.uniform4fv(n, B(t, _));
          }),
          (n.wbg.__wbg_uniform4iv_9436eeda2a27cce8 = function (e, n, t, _) {
            e.uniform4iv(n, k(t, _));
          }),
          (n.wbg.__wbg_uniformMatrix2fv_1a40e9f63b2005c8 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.uniformMatrix2fv(n, 0 !== t, B(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix3fv_dcde28ba8c34d30e = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.uniformMatrix3fv(n, 0 !== t, B(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix4fv_4575a018c8188146 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.uniformMatrix4fv(n, 0 !== t, B(_, r));
          }),
          (n.wbg.__wbg_activeTexture_01d5469eb22c10e7 = function (e, n) {
            e.activeTexture(n >>> 0);
          }),
          (n.wbg.__wbg_attachShader_14fb12e2ae589dc3 = function (e, n, t) {
            e.attachShader(n, t);
          }),
          (n.wbg.__wbg_bindBuffer_b7c382dcd70e33f6 = function (e, n, t) {
            e.bindBuffer(n >>> 0, t);
          }),
          (n.wbg.__wbg_bindFramebuffer_a5ab0ed0463586cb = function (e, n, t) {
            e.bindFramebuffer(n >>> 0, t);
          }),
          (n.wbg.__wbg_bindRenderbuffer_2d67c879cdbe5ea9 = function (e, n, t) {
            e.bindRenderbuffer(n >>> 0, t);
          }),
          (n.wbg.__wbg_bindTexture_c1c0e00507424f8e = function (e, n, t) {
            e.bindTexture(n >>> 0, t);
          }),
          (n.wbg.__wbg_blendColor_13739d87434b79c3 = function (e, n, t, _, r) {
            e.blendColor(n, t, _, r);
          }),
          (n.wbg.__wbg_blendEquation_562c3267161e4675 = function (e, n) {
            e.blendEquation(n >>> 0);
          }),
          (n.wbg.__wbg_blendEquationSeparate_48b95e78f7224be4 = function (
            e,
            n,
            t
          ) {
            e.blendEquationSeparate(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_blendFunc_f4365f78b650180f = function (e, n, t) {
            e.blendFunc(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_blendFuncSeparate_b508053691b6ebbe = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.blendFuncSeparate(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_clear_edebb12717625e22 = function (e, n) {
            e.clear(n >>> 0);
          }),
          (n.wbg.__wbg_clearColor_8758a0aef2ed52e4 = function (e, n, t, _, r) {
            e.clearColor(n, t, _, r);
          }),
          (n.wbg.__wbg_colorMask_99120a2c8caf1298 = function (e, n, t, _, r) {
            e.colorMask(0 !== n, 0 !== t, 0 !== _, 0 !== r);
          }),
          (n.wbg.__wbg_compileShader_4e9130ccbd4a0238 = function (e, n) {
            e.compileShader(n);
          }),
          (n.wbg.__wbg_copyTexSubImage2D_7c0b0080eece3c1a = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f,
            c,
            a
          ) {
            e.copyTexSubImage2D(n >>> 0, t, _, r, b, f, c, a);
          }),
          (n.wbg.__wbg_createBuffer_8c64250e5283611c = function (e) {
            const n = e.createBuffer();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createFramebuffer_1f943a32c748753e = function (e) {
            const n = e.createFramebuffer();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createProgram_28db0ff3cee5f71a = function (e) {
            const n = e.createProgram();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createRenderbuffer_a76dcfda7bdc749a = function (e) {
            const n = e.createRenderbuffer();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_createShader_c5fcd8592f47b510 = function (e, n) {
            const t = e.createShader(n >>> 0);
            return o(t) ? 0 : D(t);
          }),
          (n.wbg.__wbg_createTexture_81fd93af28301e0e = function (e) {
            const n = e.createTexture();
            return o(n) ? 0 : D(n);
          }),
          (n.wbg.__wbg_cullFace_d4450f8718c6b3eb = function (e, n) {
            e.cullFace(n >>> 0);
          }),
          (n.wbg.__wbg_deleteBuffer_17feed38f3a70ec9 = function (e, n) {
            e.deleteBuffer(n);
          }),
          (n.wbg.__wbg_deleteFramebuffer_130abca01c89b7d6 = function (e, n) {
            e.deleteFramebuffer(n);
          }),
          (n.wbg.__wbg_deleteProgram_dd5f0e2bc555e270 = function (e, n) {
            e.deleteProgram(n);
          }),
          (n.wbg.__wbg_deleteRenderbuffer_385f3c9e8759b99e = function (e, n) {
            e.deleteRenderbuffer(n);
          }),
          (n.wbg.__wbg_deleteShader_fac9fb3cdefdf6ec = function (e, n) {
            e.deleteShader(n);
          }),
          (n.wbg.__wbg_deleteTexture_605a36a7e380df5f = function (e, n) {
            e.deleteTexture(n);
          }),
          (n.wbg.__wbg_depthFunc_00d8a905436dc681 = function (e, n) {
            e.depthFunc(n >>> 0);
          }),
          (n.wbg.__wbg_depthMask_134f9e3073ca4fd0 = function (e, n) {
            e.depthMask(0 !== n);
          }),
          (n.wbg.__wbg_depthRange_f34f19edea1feadd = function (e, n, t) {
            e.depthRange(n, t);
          }),
          (n.wbg.__wbg_disable_65425605098b79cf = function (e, n) {
            e.disable(n >>> 0);
          }),
          (n.wbg.__wbg_disableVertexAttribArray_cf25f8beb5872364 = function (
            e,
            n
          ) {
            e.disableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_drawArrays_e5fa3cfc2b5d7c6d = function (e, n, t, _) {
            e.drawArrays(n >>> 0, t, _);
          }),
          (n.wbg.__wbg_drawElements_a388832eba137ef0 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.drawElements(n >>> 0, t, _ >>> 0, r);
          }),
          (n.wbg.__wbg_enable_2c3b6a4692af9b1b = function (e, n) {
            e.enable(n >>> 0);
          }),
          (n.wbg.__wbg_enableVertexAttribArray_6dd3d0668209ae19 = function (
            e,
            n
          ) {
            e.enableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_framebufferRenderbuffer_3bf1420713a0b21a = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.framebufferRenderbuffer(n >>> 0, t >>> 0, _ >>> 0, r);
          }),
          (n.wbg.__wbg_framebufferTexture2D_ed03c0674b9979ce = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.framebufferTexture2D(n >>> 0, t >>> 0, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_frontFace_00177185d2fae697 = function (e, n) {
            e.frontFace(n >>> 0);
          }),
          (n.wbg.__wbg_getActiveUniform_e49dcda694ae15ab = function (e, n, t) {
            const _ = e.getActiveUniform(n, t >>> 0);
            return o(_) ? 0 : D(_);
          }),
          (n.wbg.__wbg_getAttribLocation_65a128b3e856d81e = function (
            e,
            n,
            t,
            _
          ) {
            return e.getAttribLocation(n, u(t, _));
          }),
          (n.wbg.__wbg_getExtension_d1151f6038b08ca5 = function () {
            return P(function (e, n, t) {
              const _ = e.getExtension(u(n, t));
              return o(_) ? 0 : D(_);
            }, arguments);
          }),
          (n.wbg.__wbg_getParameter_d6cd2dd2cde656ec = function () {
            return P(function (e, n) {
              return e.getParameter(n >>> 0);
            }, arguments);
          }),
          (n.wbg.__wbg_getProgramInfoLog_7fd2a7c6c1a280c1 = function (e, n, t) {
            const _ = n.getProgramInfoLog(t);
            var r = o(_) ? 0 : p(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = l;
            (d()[e / 4 + 1] = f), (d()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbg_getProgramParameter_af1cfcccbbc80f71 = function (
            e,
            n,
            t
          ) {
            return e.getProgramParameter(n, t >>> 0);
          }),
          (n.wbg.__wbg_getShaderInfoLog_d057293074e59c61 = function (e, n, t) {
            const _ = n.getShaderInfoLog(t);
            var r = o(_) ? 0 : p(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = l;
            (d()[e / 4 + 1] = f), (d()[e / 4 + 0] = r);
          }),
          (n.wbg.__wbg_getShaderParameter_685d7d7092c6bae6 = function (
            e,
            n,
            t
          ) {
            return e.getShaderParameter(n, t >>> 0);
          }),
          (n.wbg.__wbg_getUniformLocation_b46e5db76599a918 = function (
            e,
            n,
            t,
            _
          ) {
            const r = e.getUniformLocation(n, u(t, _));
            return o(r) ? 0 : D(r);
          }),
          (n.wbg.__wbg_linkProgram_ca9df3fba2fd4125 = function (e, n) {
            e.linkProgram(n);
          }),
          (n.wbg.__wbg_pixelStorei_f97b971917582269 = function (e, n, t) {
            e.pixelStorei(n >>> 0, t);
          }),
          (n.wbg.__wbg_polygonOffset_fb73618b77fd3f6f = function (e, n, t) {
            e.polygonOffset(n, t);
          }),
          (n.wbg.__wbg_renderbufferStorage_37eab84be1494aef = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.renderbufferStorage(n >>> 0, t >>> 0, _, r);
          }),
          (n.wbg.__wbg_scissor_8bc2e761846f53f0 = function (e, n, t, _, r) {
            e.scissor(n, t, _, r);
          }),
          (n.wbg.__wbg_shaderSource_457e8bc42050401d = function (e, n, t, _) {
            e.shaderSource(n, u(t, _));
          }),
          (n.wbg.__wbg_stencilFunc_c330e345b19b0f38 = function (e, n, t, _) {
            e.stencilFunc(n >>> 0, t, _ >>> 0);
          }),
          (n.wbg.__wbg_stencilFuncSeparate_510d3287542b4574 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.stencilFuncSeparate(n >>> 0, t >>> 0, _, r >>> 0);
          }),
          (n.wbg.__wbg_stencilMask_e1887eeaabe22771 = function (e, n) {
            e.stencilMask(n >>> 0);
          }),
          (n.wbg.__wbg_stencilMaskSeparate_e89abefeb5641657 = function (
            e,
            n,
            t
          ) {
            e.stencilMaskSeparate(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_stencilOp_05f38c743b7da372 = function (e, n, t, _) {
            e.stencilOp(n >>> 0, t >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_stencilOpSeparate_aa3d09aa448a6f48 = function (
            e,
            n,
            t,
            _,
            r
          ) {
            e.stencilOpSeparate(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_texParameteri_9fbb09bbf9670af4 = function (e, n, t, _) {
            e.texParameteri(n >>> 0, t >>> 0, _);
          }),
          (n.wbg.__wbg_uniform1f_062c683ec584f7e8 = function (e, n, t) {
            e.uniform1f(n, t);
          }),
          (n.wbg.__wbg_uniform1i_1f8256271b54cf41 = function (e, n, t) {
            e.uniform1i(n, t);
          }),
          (n.wbg.__wbg_uniform4f_68fac972655f5359 = function (
            e,
            n,
            t,
            _,
            r,
            b
          ) {
            e.uniform4f(n, t, _, r, b);
          }),
          (n.wbg.__wbg_useProgram_6c9019d05fb8d280 = function (e, n) {
            e.useProgram(n);
          }),
          (n.wbg.__wbg_vertexAttribPointer_ccabef9be68fe1c4 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            f
          ) {
            e.vertexAttribPointer(n >>> 0, t, _ >>> 0, 0 !== r, b, f);
          }),
          (n.wbg.__wbg_viewport_4bdfc4b8959593ee = function (e, n, t, _, r) {
            e.viewport(n, t, _, r);
          }),
          (n.wbg.__wbg_style_2141664e428fef46 = function (e) {
            return e.style;
          }),
          (n.wbg.__wbg_inverse_0487daae5bca6389 = function (e) {
            return e.inverse();
          }),
          (n.wbg.__wbg_offsetX_413d9f02022e72ad = function (e) {
            return e.offsetX;
          }),
          (n.wbg.__wbg_offsetY_488f80a0a9666028 = function (e) {
            return e.offsetY;
          }),
          (n.wbg.__wbg_button_a1c470d5e4c997f2 = function (e) {
            return e.button;
          }),
          (n.wbg.__wbg_instanceof_Response_fb3a4df648c1859b = function (e) {
            let n;
            try {
              n = e instanceof Response;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_url_8ec2534cdfacb103 = function (e, n) {
            const t = p(n.url, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = l;
            (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
          }),
          (n.wbg.__wbg_ok_1cd4c5ee1ccf4e0f = function (e) {
            return e.ok;
          }),
          (n.wbg.__wbg_statusText_9674693c2eb731fa = function (e, n) {
            const t = p(
                n.statusText,
                b.__wbindgen_malloc,
                b.__wbindgen_realloc
              ),
              _ = l;
            (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
          }),
          (n.wbg.__wbg_arrayBuffer_cb886e06a9e36e4d = function () {
            return P(function (e) {
              return e.arrayBuffer();
            }, arguments);
          }),
          (n.wbg.__wbg_get_27fe3dac1c4d0224 = function (e, n) {
            return e[n >>> 0];
          }),
          (n.wbg.__wbg_length_e498fbc24f9c1d4f = function (e) {
            return e.length;
          }),
          (n.wbg.__wbg_new_b525de17f44a8943 = function () {
            return new Array();
          }),
          (n.wbg.__wbg_newnoargs_2b8b6bd7753c76ba = function (e, n) {
            return new Function(u(e, n));
          }),
          (n.wbg.__wbg_next_88560ec06a094dea = function () {
            return P(function (e) {
              return e.next();
            }, arguments);
          }),
          (n.wbg.__wbg_done_1ebec03bbd919843 = function (e) {
            return e.done;
          }),
          (n.wbg.__wbg_value_6ac8da5cc5b3efda = function (e) {
            return e.value;
          }),
          (n.wbg.__wbg_get_baf4855f9a986186 = function () {
            return P(function (e, n) {
              return Reflect.get(e, n);
            }, arguments);
          }),
          (n.wbg.__wbg_call_95d1ea488d03e4e8 = function () {
            return P(function (e, n) {
              return e.call(n);
            }, arguments);
          }),
          (n.wbg.__wbg_new_f9876326328f45ed = function () {
            return new Object();
          }),
          (n.wbg.__wbg_self_e7c1f827057f6584 = function () {
            return P(function () {
              return self.self;
            }, arguments);
          }),
          (n.wbg.__wbg_window_a09ec664e14b1b81 = function () {
            return P(function () {
              return window.window;
            }, arguments);
          }),
          (n.wbg.__wbg_globalThis_87cbb8506fecf3a9 = function () {
            return P(function () {
              return globalThis.globalThis;
            }, arguments);
          }),
          (n.wbg.__wbg_global_c85a9259e621f3db = function () {
            return P(function () {
              return t.g.global;
            }, arguments);
          }),
          (n.wbg.__wbg_set_17224bc548dd1d7b = function (e, n, t) {
            e[n >>> 0] = t;
          }),
          (n.wbg.__wbg_isArray_39d28997bf6b96b4 = function (e) {
            return Array.isArray(e);
          }),
          (n.wbg.__wbg_of_892d7838f8e4cc20 = function (e) {
            return Array.of(e);
          }),
          (n.wbg.__wbg_of_defbc28e6c20f48f = function (e, n) {
            return Array.of(e, n);
          }),
          (n.wbg.__wbg_push_49c286f04dd3bf59 = function (e, n) {
            return e.push(n);
          }),
          (n.wbg.__wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065 = function (e) {
            let n;
            try {
              n = e instanceof ArrayBuffer;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_new_14e50b92ffe713d6 = function (e) {
            return new ArrayBuffer(e >>> 0);
          }),
          (n.wbg.__wbg_values_97683218f24ed826 = function (e) {
            return e.values();
          }),
          (n.wbg.__wbg_new_15d3966e9981a196 = function (e, n) {
            return new Error(u(e, n));
          }),
          (n.wbg.__wbg_apply_aedce30790c00792 = function () {
            return P(function (e, n, t) {
              return e.apply(n, t);
            }, arguments);
          }),
          (n.wbg.__wbg_call_9495de66fdbe016b = function () {
            return P(function (e, n, t) {
              return e.call(n, t);
            }, arguments);
          }),
          (n.wbg.__wbg_isSafeInteger_8c4789029e885159 = function (e) {
            return Number.isSafeInteger(e);
          }),
          (n.wbg.__wbg_getTime_7c59072d1651a3cf = function (e) {
            return e.getTime();
          }),
          (n.wbg.__wbg_getTimezoneOffset_2a6b27fb18493a56 = function (e) {
            return e.getTimezoneOffset();
          }),
          (n.wbg.__wbg_new0_25059e40b1c02766 = function () {
            return new Date();
          }),
          (n.wbg.__wbg_instanceof_Object_f5a826c4da0d4a94 = function (e) {
            let n;
            try {
              n = e instanceof Object;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_entries_4e1315b774245952 = function (e) {
            return Object.entries(e);
          }),
          (n.wbg.__wbg_fromEntries_47a432d7604fc06a = function () {
            return P(function (e) {
              return Object.fromEntries(e);
            }, arguments);
          }),
          (n.wbg.__wbg_is_8f1618fe9a4fd388 = function (e, n) {
            return Object.is(e, n);
          }),
          (n.wbg.__wbg_new_9d3a9ce4282a18a8 = function (e, n) {
            try {
              var t = { a: e, b: n };
              const _ = new Promise((e, n) => {
                const _ = t.a;
                t.a = 0;
                try {
                  return (function (e, n, t, _) {
                    b.closure5758_externref_shim(e, n, t, _);
                  })(_, t.b, e, n);
                } finally {
                  t.a = _;
                }
              });
              return _;
            } finally {
              t.a = t.b = 0;
            }
          }),
          (n.wbg.__wbg_resolve_fd40f858d9db1a04 = function (e) {
            return Promise.resolve(e);
          }),
          (n.wbg.__wbg_then_ec5db6d509eb475f = function (e, n) {
            return e.then(n);
          }),
          (n.wbg.__wbg_then_f753623316e2873a = function (e, n, t) {
            return e.then(n, t);
          }),
          (n.wbg.__wbg_buffer_cf65c07de34b9a08 = function (e) {
            return e.buffer;
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_55f9ffb569d9fa74 = function (
            e,
            n,
            t
          ) {
            return new Int8Array(e, n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_f477e654086cbbb6 = function (
            e,
            n,
            t
          ) {
            return new Int16Array(e, n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_b57a602974d4b1cd = function (
            e,
            n,
            t
          ) {
            return new Int32Array(e, n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5 = function (
            e,
            n,
            t
          ) {
            return new Uint8Array(e, n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_new_537b7341ce90bb31 = function (e) {
            return new Uint8Array(e);
          }),
          (n.wbg.__wbg_set_17499e8aa4003ebd = function (e, n, t) {
            e.set(n, t >>> 0);
          }),
          (n.wbg.__wbg_length_27a2afe8ab42b09f = function (e) {
            return e.length;
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_9241d9d251418ebf = function (
            e,
            n,
            t
          ) {
            return new Uint16Array(e, n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_5c5a6e21987c3bee = function (
            e,
            n,
            t
          ) {
            return new Uint32Array(e, n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_4078d56428eb2926 = function (
            e,
            n,
            t
          ) {
            return new Float32Array(e, n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_instanceof_Uint8Array_01cebe79ca606cca = function (e) {
            let n;
            try {
              n = e instanceof Uint8Array;
            } catch {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_newwithlength_b56c882b57805732 = function (e) {
            return new Uint8Array(e >>> 0);
          }),
          (n.wbg.__wbg_fill_9a34644ce9e78c5b = function (e, n, t, _) {
            return e.fill(n, t >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_subarray_7526649b91a252a6 = function (e, n, t) {
            return e.subarray(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_ownKeys_9efe69be404540aa = function () {
            return P(function (e) {
              return Reflect.ownKeys(e);
            }, arguments);
          }),
          (n.wbg.__wbg_set_6aa458a4ebdb65cb = function () {
            return P(function (e, n, t) {
              return Reflect.set(e, n, t);
            }, arguments);
          }),
          (n.wbg.__wbindgen_bigint_get_as_i64 = function (e, n) {
            const t = "bigint" == typeof n ? n : void 0;
            (((null !== y && 0 !== y.byteLength) ||
              (y = new BigInt64Array(b.memory.buffer)),
            y)[e / 8 + 1] = o(t) ? BigInt(0) : t),
              (d()[e / 4 + 0] = !o(t));
          }),
          (n.wbg.__wbindgen_debug_string = function (e, n) {
            const t = p(h(n), b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = l;
            (d()[e / 4 + 1] = _), (d()[e / 4 + 0] = t);
          }),
          (n.wbg.__wbindgen_throw = function (e, n) {
            throw new Error(u(e, n));
          }),
          (n.wbg.__wbindgen_memory = function () {
            return b.memory;
          }),
          (n.wbg.__wbindgen_closure_wrapper952 = function (e, n, t) {
            return x(e, n, 280, S);
          }),
          (n.wbg.__wbindgen_closure_wrapper953 = function (e, n, t) {
            return x(e, n, 280, S);
          }),
          (n.wbg.__wbindgen_closure_wrapper954 = function (e, n, t) {
            return x(e, n, 280, v);
          }),
          (n.wbg.__wbindgen_closure_wrapper955 = function (e, n, t) {
            return x(e, n, 280, S);
          }),
          (n.wbg.__wbindgen_closure_wrapper956 = function (e, n, t) {
            return x(e, n, 280, A);
          }),
          (n.wbg.__wbindgen_closure_wrapper957 = function (e, n, t) {
            return x(e, n, 280, S);
          }),
          (n.wbg.__wbindgen_closure_wrapper13285 = function (e, n, t) {
            return x(e, n, 5212, I);
          }),
          (n.wbg.__wbindgen_init_externref_table = function () {
            const e = b.__wbindgen_export_2,
              n = e.grow(4);
            e.set(0, void 0),
              e.set(n + 0, void 0),
              e.set(n + 1, null),
              e.set(n + 2, !0),
              e.set(n + 3, !1);
          }),
          n
        );
      }
      function W(e, n) {
        return (
          (b = e.exports),
          (V.__wbindgen_wasm_module = n),
          (y = null),
          (R = null),
          (i = null),
          (w = null),
          (E = null),
          (c = null),
          (C = null),
          b.__wbindgen_start(),
          b
        );
      }
      function U(e) {
        const n = O();
        return (
          e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)),
          W(new WebAssembly.Instance(e, n), e)
        );
      }
      async function V(e) {
        void 0 === e && (e = new URL(t(899), t.b));
        const n = O();
        ("string" == typeof e ||
          ("function" == typeof Request && e instanceof Request) ||
          ("function" == typeof URL && e instanceof URL)) &&
          (e = fetch(e));
        const { instance: _, module: r } = await (async function (e, n) {
          if ("function" == typeof Response && e instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
              try {
                return await WebAssembly.instantiateStreaming(e, n);
              } catch (n) {
                if ("application/wasm" == e.headers.get("Content-Type"))
                  throw n;
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  n
                );
              }
            const t = await e.arrayBuffer();
            return await WebAssembly.instantiate(t, n);
          }
          {
            const t = await WebAssembly.instantiate(e, n);
            return t instanceof WebAssembly.Instance
              ? { instance: t, module: e }
              : t;
          }
        })(await e, n);
        return W(_, r);
      }
      const q = V;
    },
  },
]);
//# sourceMappingURL=core.ruffle.a648731f80678e415588.js.map